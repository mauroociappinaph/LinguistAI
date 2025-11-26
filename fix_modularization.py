#!/usr/bin/env python3
import os
import re
import json

def extract_and_write_files(lesson_dir, lesson_content):
    """Extrae y escribe archivos modulares correctamente"""
    
    # 1. Common Mistakes
    cm_pattern = r'commonMistakes: \[((?:[^[\]]|\[[^\]]*\])*)\]'
    cm_match = re.search(cm_pattern, lesson_content, re.DOTALL)
    if cm_match:
        mistakes_content = cm_match.group(1).strip()
        with open(os.path.join(lesson_dir, 'commonMistakes.ts'), 'w') as f:
            f.write(f'''import {{ CommonMistake }} from "../../../../../types";

export const commonMistakes: CommonMistake[] = [
{mistakes_content}
];
''')
    
    # 2. Grammar (sin commonMistakes, se importará)
    # Extraer todo desde 'grammar: {' hasta antes de 'vocabulary:'
    grammar_start = lesson_content.find('grammar: {')
    vocab_start = lesson_content.find('\n  vocabulary:', grammar_start)
    
    if grammar_start != -1 and vocab_start != -1:
        grammar_block = lesson_content[grammar_start+9:vocab_start].strip()
        # Remover commonMistakes del bloque
        grammar_block = re.sub(r',\s*commonMistakes: \[(?:[^[\]]|\[[^\]]*\])*\]', '', grammar_block, flags=re.DOTALL)
        
        with open(os.path.join(lesson_dir, 'grammar.ts'), 'w') as f:
            f.write(f'''import {{ GrammarSection }} from "../../../../../types";
import {{ commonMistakes }} from "./commonMistakes";

export const grammar: GrammarSection = {{
{grammar_block},
  commonMistakes
}};
''')
    
    # 3. Vocabulary
    vocab_start = lesson_content.find('vocabulary: [')
    phrasal_start = lesson_content.find('\n  phrasalVerbs:', vocab_start)
    compound_start = lesson_content.find('\n  compoundWords:', phrasal_start)
    functional_start = lesson_content.find('\n  functionalChunks:', compound_start)
    scenario_start = lesson_content.find('\n  scenario:', functional_start)
    
    if all(x != -1 for x in [vocab_start, phrasal_start, compound_start, functional_start, scenario_start]):
        vocab = lesson_content[vocab_start+12:phrasal_start].strip().rstrip(',')
        phrasal = lesson_content[phrasal_start+16:compound_start].strip().rstrip(',')
        compound = lesson_content[compound_start+18:functional_start].strip().rstrip(',')
        functional = lesson_content[functional_start+19:scenario_start].strip().rstrip(',')
        
        with open(os.path.join(lesson_dir, 'vocabulary.ts'), 'w') as f:
            f.write(f'''export const vocabulary = {vocab};

export const phrasalVerbs = {phrasal};
export const compoundWords = {compound};

export const functionalChunks = {functional};
''')
    
    # 4. Index.ts simplificado
    # Extraer metadata básica
    id_match = re.search(r'id: "([^"]+)"', lesson_content)
    title_match = re.search(r'title: "([^"]+)"', lesson_content)
    level_match = re.search(r'level: (Difficulty\.\w+)', lesson_content)
    desc_match = re.search(r'description: "((?:[^"\\\\]|\\\\.)*)"', lesson_content)
    dyk_match = re.search(r'didYouKnow: "((?:[^"\\\\]|\\\\.)*)"', lesson_content, re.DOTALL)
    
    # Extraer activities
    scenario_match = re.search(r'scenario: "((?:[^"\\\\]|\\\\.)*)"', lesson_content)
    speaking_match = re.search(r'speaking: "((?:[^"\\\\]|\\\\.)*)"', lesson_content)
    mode_match = re.search(r'speakingPracticeMode: "((?:[^"\\\\]|\\\\.)*)"', lesson_content)
    
    # Extraer bloques completos de activities
    reading_start = lesson_content.find('readingActivity: {')
    listening_start = lesson_content.find('\n  listeningActivity:', reading_start)
    pronun_start = lesson_content.find('\n  pronunciationClinic:', listening_start)
    accent_start = lesson_content.find('\n  globalAccentLab:', pronun_start)
    roleplay_start = lesson_content.find('\n  rolePlay:', accent_start)
    end_marker = lesson_content.rfind('};')
    
    reading = listening = pronun = accent = roleplay = ""
    
    if reading_start != -1 and listening_start != -1:
        reading = lesson_content[reading_start+18:listening_start].strip().rstrip(',')
    if listening_start != -1 and pronun_start != -1:
        listening = lesson_content[listening_start+21:pronun_start].strip().rstrip(',')
    if pronun_start != -1 and accent_start != -1:
        pronun = lesson_content[pronun_start+23:accent_start].strip().rstrip(',')
    if accent_start != -1 and roleplay_start != -1:
        accent = lesson_content[accent_start+20:roleplay_start].strip().rstrip(',')
    if roleplay_start != -1 and end_marker != -1:
        roleplay = lesson_content[roleplay_start+12:end_marker].strip().rstrip(',')
    
    lesson_num = os.path.basename(lesson_dir).replace('lesson-', '')
    
    with open(os.path.join(lesson_dir, 'index.ts'), 'w') as f:
        f.write(f'''import {{ Lesson, Difficulty }} from '../../../../../types';
import {{ grammar }} from './grammar';
import {{ vocabulary, phrasalVerbs, compoundWords, functionalChunks }} from './vocabulary';

export const lesson{lesson_num}: Lesson = {{
  id: "{id_match.group(1) if id_match else ''}",
  title: "{title_match.group(1) if title_match else ''}",
  level: {level_match.group(1) if level_match else 'Difficulty.A1'},
  description: "{desc_match.group(1) if desc_match else ''}",
  didYouKnow: "{dyk_match.group(1) if dyk_match else ''}",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "{scenario_match.group(1) if scenario_match else ''}",
  speaking: "{speaking_match.group(1) if speaking_match else ''}",
  speakingPracticeMode: "{mode_match.group(1) if mode_match else 'conversation'}",

  readingActivity: {{{reading}}},
  listeningActivity: {{{listening}}},
  pronunciationClinic: {{{pronun}}},
  globalAccentLab: [{accent}],
  rolePlay: {{{roleplay}}}
}};
''')

# Procesar lecciones
base = "/Users/mauroociappina/Desktop/Linguist AI/LinguistAI/data/lessons/A1"
modules = [
    ("projects-collaborations", [1, 2, 3, 4]),
    ("debugging-problem-solving", [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12])
]

for module_name, lessons in modules:
    print(f"\\n{'='*60}\\nMódulo: {module_name}\\n{'='*60}")
    for num in lessons:
        lesson_dir = os.path.join(base, module_name, f"lesson-{num:02d}")
        index_file = os.path.join(lesson_dir, "index.ts")
        
        if not os.path.exists(index_file):
            continue
            
        with open(index_file, 'r') as f:
            content = f.read()
        
        if 'import { grammar }' in content:
            print(f"✅ Ya modularizado: lesson-{num:02d}")
            continue
        
        print(f"🔄 Modularizando: lesson-{num:02d}")
        try:
            extract_and_write_files(lesson_dir, content)
            print(f"  ✅ Completado")
        except Exception as e:
            print(f"  ❌ Error: {e}")
