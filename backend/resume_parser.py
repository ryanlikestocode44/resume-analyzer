# resume_parser.py

import os
import re
import pdfplumber
import pandas as pd
from datetime import datetime
from dateutil import parser as date_parser
from transformers import AutoTokenizer, AutoModelForTokenClassification, pipeline
import phonenumbers
from phonenumbers import geocoder
import joblib
import kagglehub
from kagglehub import KaggleDatasetAdapter
from collections import Counter

from videos import resume_videos, interview_videos
from recommender import recommend_courses, recommend_field

# Load IndoBERT at once
# Load IndoBERT model once
print("Loading IndoBERT NER model...")
NER_TOKENIZER = AutoTokenizer.from_pretrained("cahya/bert-base-indonesian-NER")
NER_MODEL = AutoModelForTokenClassification.from_pretrained("cahya/bert-base-indonesian-NER")
NER_PIPE = pipeline("ner", model=NER_MODEL, tokenizer=NER_TOKENIZER, aggregation_strategy="simple")

CACHE_DIR = "cached"
CACHE_FILE = os.path.join(CACHE_DIR, "cached_skills.pkl")

# Ensure cache directory exists
os.makedirs(CACHE_DIR, exist_ok=True)

# Load or create skill cache
if os.path.exists(CACHE_FILE):
    SKILL_SET = joblib.load(CACHE_FILE)
else:
    df = pd.read_csv("datasets/job_skills.csv")
    skill_set = set()
    for skill_list in df["job_skills"].dropna():
        for skill in skill_list.split(","):
            clean_skill = skill.strip().title()
            if len(clean_skill) > 1:
                skill_set.add(clean_skill)
    SKILL_SET = list(skill_set)
    joblib.dump(SKILL_SET, CACHE_FILE)

# Skills Section Keywords
SECTION_KEYWORDS = [
    "skills", "keterampilan", "kemampuan", "proficiencies", "keahlian", "kompetensi", "technical skills", "keahlian teknis", "soft skills", "keahlian soft", "hard skills", "keahlian hard", "expertise", "spesialisasi", "specializations", "skill set", "skillset", "capabilities", "kualifikasi"
]

def is_reasonable_skill(skill):
    return 2 < len(skill) <= 50 and not any(char.isdigit() for char in skill)

def extract_skills_from_text(text):
    pattern = r'(?i)(' + '|'.join(SECTION_KEYWORDS) + r')[\s:]*\n?(.*?)(\n\n|\Z)'
    matches = re.findall(pattern, text, re.DOTALL)

    skill_candidates = []
    for _, content, _ in matches:
        lines = content.split('\n')
        for line in lines:
            line = line.strip().lstrip('-\u2022\u2013~ ')
            fragments = re.split(r'[,\|\u2022]', line)
            skill_candidates.extend(fragments)

    cleaned_skills = [
        s.strip().title() for s in skill_candidates if is_reasonable_skill(s.strip())
    ]
    return sorted(set(cleaned_skills))


class ResumeParser:
    def __init__(self, file_bytes):
        self.file_bytes = file_bytes
        self.text = self.extract_text()
        self.cleaned_text = self.clean_text(self.text)
        self.ner_results = self.ner_with_indobert()

        self.predefined_skills = self.load_skill_dataset()
        self.details = self.build_details()

    def extract_text(self):
        import io
        with pdfplumber.open(io.BytesIO(self.file_bytes)) as pdf:
            return "\n".join([page.extract_text() or '' for page in pdf.pages])

    def clean_text(self, text):
        return re.sub(r'\s+', ' ', text).strip()
    
    def ner_with_indobert(self):
        sentences = re.split(r'(?<=[.!?]) +', self.cleaned_text)
        return [ent for sentence in sentences for ent in NER_PIPE(sentence[:512])]

    def load_skill_dataset(self):
        return SKILL_SET

    def extract_name(self):
        name_tokens = [ent["word"].replace("##", "") for ent in self.ner_results if ent["entity_group"].upper() == "PER"]
        name_counts = Counter(name_tokens)
        if not name_counts:
            return None
        most_common_name = " ".join([w.title() for w, _ in name_counts.most_common(3)])
        return most_common_name.strip()

    def extract_email(self):
        match = re.search(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+", self.cleaned_text)
        return match.group(0) if match else None

    def extract_phone(self):
        match = re.search(r'(\+62[\s\-]?\d{3,4}[\s\-]?\d{3,4}[\s\-]?\d{3,4})', self.cleaned_text)
        return re.sub(r'\D', '', match.group(1)) if match else None

    def extract_links(self):
        linkedin = github = None
        links = re.findall(r'(https?://[^\s]+|www\.[^\s]+|[^\s]+\.com/[^\s]+)', self.cleaned_text)
        for link in links:
            if 'linkedin.com' in link:
                linkedin = link.strip('.,')
            elif 'github.com' in link:
                github = link.strip('.,')
        return linkedin, github

    def extract_skills(self):
        return extract_skills_from_text(self.cleaned_text)
    
    def extract_education(self):
        pattern = r'(SMA|SMK|Sarjana|S1|S2|S3|Bachelor|Master|Doctor|Universitas|Institut)[^\n]{0,80}'
        matches = re.findall(pattern, self.text, re.IGNORECASE)
        return list(set(matches))

    def extract_projects(self):
        pattern = r'(?i)(projects|portfolio)[\s:]*\n?(.*?)(\n\n|\Z)'
        matches = re.findall(pattern, self.text, re.DOTALL)
        return [line.strip("-• ") for _, content, _ in matches for line in content.split("\n") if line.strip()]

    def extract_experience(self):
        pattern = r'(?i)(experience|pengalaman)[\s:]*\n?(.*?)(\n\n|\Z)'
        matches = re.findall(pattern, self.text, re.DOTALL)
        return [line.strip("-• ") for _, content, _ in matches for line in content.split("\n") if line.strip()]

    def get_total_experience_from_text(self):
        date_ranges = re.findall(
            r'((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\.?\s?\d{4})\s*[-\u2013]\s*((?:Present|Now|\d{4}))',
            self.text, re.IGNORECASE)
        total_months = 0
        for start_str, end_str in date_ranges:
            try:
                start = date_parser.parse(start_str, fuzzy=True, default=datetime(2000, 1, 1))
                end = datetime.now() if re.search(r'present|now', end_str.lower()) else date_parser.parse(end_str, fuzzy=True)
                total_months += max(0, (end.year - start.year) * 12 + (end.month - start.month))
            except (ValueError, TypeError, OverflowError) as e:
                print(f"Error parsing date range '{start_str} - {end_str}': {e}")
                continue
        return round(total_months / 12, 2)

    def score_experience_with_ner(self):
        score, orgs, dates, locations, numerics = 0, set(), set(), set(), 0
        verbs = ["develop", "manage", "lead", "create", "optimize", "analyze", "design", "build", "run"]

        for ent in self.ner_results:
            label = ent["entity_group"].upper()
            word = ent["word"].lower()

            if label == "ORG":
                orgs.add(word)
            elif label == "DATE":
                dates.add(word)
            elif label == "LOC":
                locations.add(word)
            elif label in ["MONEY", "PERCENT", "CARDINAL"]:
                numerics += 1

        verbs_found = sum(1 for v in verbs if v in self.text.lower())

        score += min(len(orgs), 3) * 3
        score += min(len(dates), 3) * 2
        score += min(len(locations), 2) * 2
        score += min(numerics, 2) * 2
        score += min(verbs_found, 4) * 1.5

        return round(min(score, 30), 1)

    def build_details(self):
        linkedin, github = self.extract_links()
        raw_skills = self.extract_skills()
        matched_skills = [s for s in raw_skills if s in self.predefined_skills]
        recommended_skills = list(set(self.predefined_skills) - set(matched_skills))[:5]

        field_info = recommend_field(matched_skills)
        recommended_courses = recommend_courses(field_info["field"])
        
        print("=== Field Info ===")
        print(field_info)

        return {
            "name": self.extract_name(),
            "email": self.extract_email(),
            "phone": self.extract_phone(),
            "linkedin": linkedin,
            "github": github,
            "skills": matched_skills,
            "education": self.extract_education(),
            "projects": self.extract_projects(),
            "experience_items": self.extract_experience(),
            "recommended_skills": recommended_skills,
            "recommended_field": field_info["field"],
            "matched_field_skills": field_info["matched_skills"],
            "field_match_percent": field_info["match_percent"],
            "recommended_courses": recommended_courses,
            "resume_video_url": resume_videos[0],
            "interview_video_url": interview_videos[0],
            "resume_score": round(60 + 0.5 * len(matched_skills)),
            "experience_score": self.score_experience_with_ner(),
            "total_experience_years": self.get_total_experience_from_text(),
        }

    def get_extracted_data(self):
        return self.details
