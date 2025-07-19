import os
import random
import time
import pandas as pd
import joblib
from rapidfuzz import fuzz

from skills import (
    ds_skills, web_skills, android_skills, ios_skills, uiux_skills,
    cloud_skills, iot_skills, ml_skills, cs_skills
)
from courses import (
    ds_course, web_course, android_course, ios_course, uiux_course,
)
from videos import resume_videos, interview_videos

# === Konstanta Cache ===
CACHE_DIR = "cached"
CACHE_FILE = os.path.join(CACHE_DIR, "predefined_skills.pkl")
JOB_SKILL_CSV = "datasets/job_skills.csv"  # <-- sesuaikan path jika perlu

# Pastikan folder cache tersedia
os.makedirs(CACHE_DIR, exist_ok=True)

# === Preprocessing & Caching Skill Unik ===
def extract_and_cache_skills():
    if os.path.exists(CACHE_FILE):
        try:
            return joblib.load(CACHE_FILE)
        except Exception as e:
            print(f"Gagal memuat cache predefined skills: {e}")

    try:
        df = pd.read_csv(JOB_SKILL_CSV)
        skill_set = set()
        for skill_list in df["job_skills"].dropna():
            for skill in skill_list.split(","):
                clean_skill = skill.strip().lower()
                if len(clean_skill) > 1:
                    skill_set.add(clean_skill)

        all_skills = sorted(skill_set)
        joblib.dump(all_skills, CACHE_FILE)
        print(f"Berhasil cache {len(all_skills)} skill ke {CACHE_FILE}")
        return all_skills

    except Exception as e:
        print(f"Error saat ekstrak job_skills.csv: {e}")
        return []

# === Load Sekali Saja ===
all_global_skills = extract_and_cache_skills()

# === FUNGSI REKOMENDASI ===

def recommend_field(skills):
    if not skills:
        return {
            "field": None,
            "matched_skills": [],
            "match_percent": 0
        }

    skill_set = set(skill.lower() for skill in skills)

    field_map = {
        "Data Science": ds_skills,
        "Web Development": web_skills,
        "Android Development": android_skills,
        "iOS Development": ios_skills,
        "UI/UX": uiux_skills,
        "Cloud Computing": cloud_skills,
        "Internet of Things": iot_skills,
        "Machine Learning": ml_skills,
        "Cyber Security": cs_skills,
    }

    scores = {}
    matched_skills_map = {}

    for field, keywords in field_map.items():
        matched = skill_set & keywords
        scores[field] = len(matched)
        matched_skills_map[field] = list(matched)

    best_field = max(scores, key=scores.get)

    if scores[best_field] == 0:
        return {
            "field": None,
            "matched_skills": [],
            "match_percent": 0
        }

    max_score = scores[best_field]
    total_keywords = len(field_map[best_field])
    match_percent = round((max_score / total_keywords) * 100, 1) if total_keywords else 0

    return {
        "field": best_field,
        "matched_skills": matched_skills_map[best_field],
        "match_percent": match_percent,
    }


def recommend_skills(matched_skills, all_skills=None, top_n=5, threshold=70):
    if all_skills is None:
        all_skills = all_global_skills

    remaining_skills = list(set(all_skills) - set(skill.lower() for skill in matched_skills))

    scored_skills = []
    for candidate in remaining_skills:
        scores = [fuzz.token_set_ratio(candidate, skill.lower()) for skill in matched_skills]
        avg_score = sum(scores) / len(scores) if scores else 0

        if avg_score >= threshold:
            scored_skills.append((candidate.title(), avg_score))

    scored_skills.sort(key=lambda x: x[1], reverse=True)

    return [skill for skill, score in scored_skills[:top_n]]


def recommend_courses(field):
    return {
        "Data Science": ds_course,
        "Web Development": web_course,
        "Android Development": android_course,
        "iOS Development": ios_course,
        "UI/UX": uiux_course,
    }.get(field, [])


def recommend_videos():
    random.seed(time.time_ns())
    resume_video = random.choice(resume_videos)
    available_interview_videos = [v for v in interview_videos if v != resume_video]
    interview_video = random.choice(available_interview_videos) if available_interview_videos else resume_video

    return {
        "resume_video_url": resume_video,
        "interview_video_url": interview_video
    }