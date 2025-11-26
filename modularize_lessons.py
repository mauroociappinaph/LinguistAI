#!/usr/bin/env python3
"""
Script para modularizar lecciones monolíticas automáticamente.
Extrae grammar, vocabulary, commonMistakes y activities a archivos separados.
"""

import os
import re
import sys

def extract_grammar_section(content):
    """Extrae la sección de gramática completa"""
    match = re.search(r'grammar: \{(.*?)\n  \},\n  vocabulary:', content, re.DOTALL)
    if match:
        return match.group(1).strip()
    return None

def extract_vocabulary_section(content):
    """Extrae vocabulary, phrasalVerbs, compoundWords, functionalChunks"""
    # Vocabulary
    vocab_match = re.search(r'vocabulary: \[(.*?)\n  \],\n  phrasalVerbs:', content, re.DOTALL)
    phrasal_match = re.search(r'phrasalVerbs: \[(.*?)\n  \],\n  compoundWords:', content, re.DOTALL)
    compound_match = re.search(r'compoundWords: \[(.*?)\n  \],\n  functionalChunks:', content, re.DOTALL)
    functional_match = re.search(r'functionalChunks: \{(.*?)\n  \},\n  scenario:', content, re.DOTALL)

    return {
        'vocabulary': vocab_match.group(1).strip() if vocab_match else '[]',
        'phrasalVerbs': phrasal_match.group(1).strip() if phrasal_match else '[]',
        'compoundWords': compound_match.group(1).strip() if compound_match else '[]',
        'functionalChunks': functional_match.group(1).strip() if functional_match else '{}'
    }

def extract_common_mistakes(content):
    """Extrae commonMistakes de la sección de gramática"""
    match = re.search(r'commonMistakes: \[(.*?)\n    \],', content, re.DOTALL)
    if match:
        return match.group(1).strip()
    return None

def modularize_lesson(lesson_dir):
    """Modulariza una lección específica"""
    index_path = os.path.join(lesson_dir, 'index.ts')

    if not os.path.exists(index_path):
        print(f"❌ No existe: {index_path}")
        return False

    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Verificar si ya está modularizado
    if 'import { grammar }' in content:
        print(f"✅ Ya modularizado: {lesson_dir}")
        return True

    print(f"🔄 Modularizando: {lesson_dir}")

    # Extraer secciones
    grammar = extract_grammar_section(content)
    vocab_sections = extract_vocabulary_section(content)
    common_mistakes = extract_common_mistakes(content)

    if not grammar:
        print(f"⚠️  No se pudo extraer gramática de {lesson_dir}")
        return False

    # Crear archivos modulares
    # TODO: Implementar creación de archivos
    print(f"  - Grammar: {len(grammar)} chars")
    print(f"  - Vocabulary: {len(vocab_sections['vocabulary'])} chars")

    return True

if __name__ == "__main__":
    base_path = "/Users/mauroociappina/Desktop/Linguist AI/LinguistAI/data/lessons/A1"

    modules = [
        ("projects-collaborations", 4),
        ("communication-at-work", 6),
        ("debugging-problem-solving", 12)
    ]

    for module_name, lesson_count in modules:
        print(f"\n{'='*60}")
        print(f"Módulo: {module_name}")
        print(f"{'='*60}")

        for i in range(1, lesson_count + 1):
            lesson_dir = os.path.join(base_path, module_name, f"lesson-{i:02d}")
            modularize_lesson(lesson_dir)
