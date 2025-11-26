#!/usr/bin/env python3
import os
import re

base_dir = "/Users/mauroociappina/Desktop/Linguist AI/LinguistAI/data/lessons"

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # Fix double opening braces
    content = re.sub(r'listeningActivity:\s*\{\{', 'listeningActivity: {', content)
    content = re.sub(r'pronunciationClinic:\s*\{\{', 'pronunciationClinic: {', content)
    content = re.sub(r'rolePlay:\s*\{\{', 'rolePlay: {', content)
    
    # Fix double closing braces (this is trickier, need to be careful not to break other things)
    # But based on the file content I saw, the double closing braces are likely at the end of the object
    # e.g. "  }}" -> "  }"
    # Let's look for "}}" followed by comma or nothing, preceded by whitespace
    content = re.sub(r'\n\s*\}\},', '\n  },', content)
    content = re.sub(r'\n\s*\}\}\n', '\n  }\n', content)

    # Fix globalAccentLab: [[]] -> globalAccentLab: []
    content = content.replace('globalAccentLab: [[]]', 'globalAccentLab: []')
    
    if content != original_content:
        print(f"Fixing {filepath}")
        with open(filepath, 'w') as f:
            f.write(content)

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file == 'index.ts':
            fix_file(os.path.join(root, file))

print("Finished fixing syntax errors.")
