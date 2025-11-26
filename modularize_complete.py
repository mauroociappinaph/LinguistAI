#!/usr/bin/env python3
"""
Script completo para modularizar lecciones monolíticas.
Genera archivos grammar.ts, vocabulary.ts, commonMistakes.ts y actualiza index.ts
"""

import os
import re

def create_common_mistakes_file(lesson_dir, content):
    """Crea commonMistakes.ts"""
    match = re.search(r'commonMistakes: \[(.*?)\n    \],', content, re.DOTALL)
    if not match:
        return False

    mistakes = match.group(1).strip()
    file_content = f"""import {{ CommonMistake }} from "../../../../../types";

export const commonMistakes: CommonMistake[] = [
{mistakes}
];
"""

    filepath = os.path.join(lesson_dir, 'commonMistakes.ts')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(file_content)
    return True

def create_grammar_file(lesson_dir, content):
    """Crea grammar.ts extrayendo toda la sección de gramática"""
    # Buscar desde 'grammar: {' hasta antes de 'vocabulary:'
    match = re.search(r'grammar: \{\n(.*?)\n  \},\n  vocabulary:', content, re.DOTALL)
    if not match:
        return False

    grammar_body = match.group(1)

    # Extraer componentes
    title_match = re.search(r'title: "(.*?)"', grammar_body)
    explanation_match = re.search(r'explanation:\n      "(.*?)"', grammar_body, re.DOTALL)
    usage_match = re.search(r'usage:\n      "(.*?)"', grammar_body, re.DOTALL)
    rules_match = re.search(r'rules: \[(.*?)\n    \]', grammar_body, re.DOTALL)
    examples_match = re.search(r'examples: \[(.*?)\n    \]', grammar_body, re.DOTALL)
    exercise_match = re.search(r'interactiveExercise: \{(.*?)\n    \}', grammar_body, re.DOTALL)

    file_content = f"""import {{ GrammarSection }} from "../../../../../types";
import {{ commonMistakes }} from "./commonMistakes";

export const grammar: GrammarSection = {{
  title: {title_match.group(0) if title_match else '""'},
  explanation: {explanation_match.group(0) if explanation_match else '""'},
  usage: {usage_match.group(0) if usage_match else '""'},
  rules: [{rules_match.group(1).strip() if rules_match else ''}],
  examples: [{examples_match.group(1).strip() if examples_match else ''}],
  commonMistakes,
  interactiveExercise: {{{exercise_match.group(1).strip() if exercise_match else ''}}}
}};
"""

    filepath = os.path.join(lesson_dir, 'grammar.ts')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(file_content)
    return True

def create_vocabulary_file(lesson_dir, content):
    """Crea vocabulary.ts"""
    vocab_match = re.search(r'vocabulary: \[(.*?)\n  \],\n  phrasalVerbs:', content, re.DOTALL)
    phrasal_match = re.search(r'phrasalVerbs: \[(.*?)\n  \],\n  compoundWords:', content, re.DOTALL)
    compound_match = re.search(r'compoundWords: \[(.*?)\n  \],\n  functionalChunks:', content, re.DOTALL)
    functional_match = re.search(r'functionalChunks: \{(.*?)\n  \},\n  scenario:', content, re.DOTALL)

    vocab = vocab_match.group(1).strip() if vocab_match else ''
    phrasal = phrasal_match.group(1).strip() if phrasal_match else ''
    compound = compound_match.group(1).strip() if compound_match else ''
    functional = functional_match.group(1).strip() if functional_match else ''

    file_content = f"""export const vocabulary = [
{vocab}
];

export const phrasalVerbs = [{phrasal}];
export const compoundWords = [{compound}];

export const functionalChunks = {{
{functional}
}};
"""

    filepath = os.path.join(lesson_dir, 'vocabulary.ts')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(file_content)
    return True

def update_index_file(lesson_dir, content):
    """Actualiza index.ts para usar imports modulares"""
    # Extraer metadata de la lección
    id_match = re.search(r'id: "(.*?)"', content)
    title_match = re.search(r'title: "(.*?)"', content)
    level_match = re.search(r'level: Difficulty\.(.*?),', content)
    description_match = re.search(r'description: "(.*?)"', content, re.DOTALL)
    didyouknow_match = re.search(r'didYouKnow: "(.*?)"', content, re.DOTALL)
    scenario_match = re.search(r'scenario: "(.*?)"', content, re.DOTALL)
    speaking_match = re.search(r'speaking: "(.*?)"', content, re.DOTALL)
    mode_match = re.search(r'speakingPracticeMode: "(.*?)"', content)

    # Extraer activities
    reading_match = re.search(r'readingActivity: \{(.*?)\n  \},\n\n  listeningActivity:', content, re.DOTALL)
    listening_match = re.search(r'listeningActivity: \{(.*?)\n  \},\n\n  pronunciationClinic:', content, re.DOTALL)
    pronun_match = re.search(r'pronunciationClinic: \{(.*?)\n  \},\n\n  globalAccentLab:', content, re.DOTALL)
    accent_match = re.search(r'globalAccentLab: \[(.*?)\n  \],\n\n  rolePlay:', content, re.DOTALL)
    roleplay_match = re.search(r'rolePlay: \{(.*?)\n  \}', content, re.DOTALL)

    new_content = f"""import {{ Lesson, Difficulty }} from '../../../../../types';
import {{ grammar }} from './grammar';
import {{ vocabulary, phrasalVerbs, compoundWords, functionalChunks }} from './vocabulary';

export const lesson01: Lesson = {{
  id: {id_match.group(0) if id_match else '""'},
  title: {title_match.group(0) if title_match else '""'},
  level: {level_match.group(0) if level_match else 'Difficulty.A1'},
  description: {description_match.group(0) if description_match else '""'},
  didYouKnow: {didyouknow_match.group(0) if didyouknow_match else '""'},

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: {scenario_match.group(0) if scenario_match else '""'},
  speaking: {speaking_match.group(0) if speaking_match else '""'},
  speakingPracticeMode: {mode_match.group(0) if mode_match else '"conversation"'},

  readingActivity: {{{reading_match.group(1).strip() if reading_match else ''}}},
  listeningActivity: {{{listening_match.group(1).strip() if listening_match else ''}}},
  pronunciationClinic: {{{pronun_match.group(1).strip() if pronun_match else ''}}},
  globalAccentLab: [{accent_match.group(1).strip() if accent_match else ''}],
  rolePlay: {{{roleplay_match.group(1).strip() if roleplay_match else ''}}}
}};
"""

    filepath = os.path.join(lesson_dir, 'index.ts')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    return True

def modularize_lesson(lesson_dir):
    """Modulariza una lección completa"""
    index_path = os.path.join(lesson_dir, 'index.ts')

    if not os.path.exists(index_path):
        return False

    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Verificar si ya está modularizado
    if 'import { grammar }' in content:
        print(f"✅ Ya modularizado: {os.path.basename(lesson_dir)}")
        return True

    print(f"🔄 Modularizando: {os.path.basename(lesson_dir)}")

    try:
        create_common_mistakes_file(lesson_dir, content)
        create_grammar_file(lesson_dir, content)
        create_vocabulary_file(lesson_dir, content)
        update_index_file(lesson_dir, content)
        print(f"  ✅ Completado")
        return True
    except Exception as e:
        print(f"  ❌ Error: {e}")
        return False

if __name__ == "__main__":
    base_path = "/Users/mauroociappina/Desktop/Linguist AI/LinguistAI/data/lessons/A1"

    # Solo projects-collaborations y debugging-problem-solving
    modules = [
        ("projects-collaborations", [1, 2, 3, 4]),
        ("debugging-problem-solving", [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12])  # Excluir 5
    ]

    total = 0
    success = 0

    for module_name, lessons in modules:
        print(f"\n{'='*60}")
        print(f"Módulo: {module_name}")
        print(f"{'='*60}")

        for lesson_num in lessons:
            lesson_dir = os.path.join(base_path, module_name, f"lesson-{lesson_num:02d}")
            total += 1
            if modularize_lesson(lesson_dir):
                success += 1

    print(f"\n{'='*60}")
    print(f"Resumen: {success}/{total} lecciones modularizadas")
    print(f"{'='*60}")
