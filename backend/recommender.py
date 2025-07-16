# recommender.py
from skills import (
    ds_skills, web_skills, android_skills, ios_skills, uiux_skills,
    cloud_skills )
from courses import (
    ds_course, web_course, android_course, ios_course, uiux_course,
)
from videos import (resume_videos, interview_videos)
import random

def recommend_field(skills):
    skill_set = set(skill.lower() for skill in skills)

    field_map = {
        "Data Science": ds_skills,
        "Web Development": web_skills,
        "Android Development": android_skills,
        "iOS Development": ios_skills,
        "UI/UX": uiux_skills,
    }

    scores = {}
    matched_skills_map = {}

    for field, keywords in field_map.items():
        matched = skill_set & keywords
        scores[field] = len(matched)
        matched_skills_map[field] = list(matched)

    best_field = max(scores, key=scores.get)
    max_score = scores[best_field]
    total_keywords = len(field_map[best_field])
    match_percent = round((max_score / total_keywords) * 100, 1) if total_keywords else 0

    return {
        "field": best_field,
        "matched_skills": matched_skills_map[best_field],
        "match_percent": match_percent,
    }

def recommend_courses(field):
    return {
        "Data Science": ds_course,
        "Web Development": web_course,
        "Android Development": android_course,
        "iOS Development": ios_course,
        "UI/UX": uiux_course
    }.get(field, [])

def recommend_videos():
    return {
        "resume_video_url": random.choice(resume_videos),
        "interview_video_url": random.choice(interview_videos)
    }