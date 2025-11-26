#!/usr/bin/env python3
import os
import re

# Base path
base = "/Users/mauroociappina/Desktop/Linguist AI/LinguistAI/data/lessons"

# Modules to process
modules = {
    "A1/getting-started": "getting-started",
    "A1/work-environment": "work-environment",
    "A1/projects-collaborations": "projects-collaborations",
    "A1/communication-at-work": "communication-at-work",
    "A1/debugging-problem-solving": "debugging-problem-solving",
    "A2/intermediate-workplace-communication": "intermediate-workplace-communication",
    "B1/explaining-your-code": "explaining-your-code",
    "B1/feedback-collaboration": "feedback-collaboration",
    "B1/professional-habits": "professional-habits",
    "B1/tech-ecosystem-trends": "tech-ecosystem-trends",
    "B2/project-management": "project-management",
    "C1/advanced-technical-writing": "advanced-technical-writing"
}

print("# Lesson Titles Extraction\n")

for module_path, module_id in modules.items():
    module_dir = os.path.join(base, module_path)
    if not os.path.exists(module_dir):
        continue
    
    print(f"\n## {module_id}")
    
    # Get all lesson directories
    lessons = sorted([d for d in os.listdir(module_dir) if d.startswith('lesson-')])
    
    for lesson_dir in lessons:
        index_file = os.path.join(module_dir, lesson_dir, 'index.ts')
        if not os.path.exists(index_file):
            continue
        
        with open(index_file, 'r') as f:
            content = f.read()
        
        # Extract title
        title_match = re.search(r'title:\s*["\']([^"\']+)["\']', content)
        if title_match:
            title = title_match.group(1)
            lesson_num = lesson_dir.replace('lesson-', '')
            print(f"      {{ id: '{lesson_dir}', title: '{title}', level: 'A1', moduleId: '{module_id}' }},")

