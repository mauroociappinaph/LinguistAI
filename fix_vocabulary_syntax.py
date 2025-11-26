#!/usr/bin/env python3
import os
import re

base_dir = "/Users/mauroociappina/Desktop/Linguist AI/LinguistAI/data/lessons"

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # Fix opening syntax
    # export const functionalChunks = : {
    # to
    # export const functionalChunks = [{
    content = re.sub(r'export const functionalChunks = : \{', 'export const functionalChunks = [{', content)
    
    # Fix closing syntax if opening was fixed
    if 'export const functionalChunks = [{' in content and original_content != content:
        # Look for the last }; and replace with }];
        # This is a bit risky if there are other }; at the end, but usually these files end with the export
        content = re.sub(r'\};\s*$', '}];', content.rstrip()) + '\n'
    
    if content != original_content:
        print(f"Fixing {filepath}")
        with open(filepath, 'w') as f:
            f.write(content)

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file == 'vocabulary.ts':
            fix_file(os.path.join(root, file))

print("Finished fixing vocabulary syntax errors.")
