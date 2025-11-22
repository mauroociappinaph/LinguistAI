import React from 'react';
import { RichTextRenderer } from './RichTextRenderer';
import { ContentBlock } from './ContentBlock';
import { SourceCard } from './SourceCard';
import { Lightbulb, BookOpen } from 'lucide-react';

interface InsightCardProps {
  text: string;
  sources?: Array<{ title: string; uri: string }>;
}

interface ParsedSection {
  type: 'paragraph' | 'list-item' | 'definition' | 'example';
  content: {
    title?: string;
    description?: string;
    example?: string;
    text?: string;
  };
}

/**
 * Componente principal para mostrar insights de forma visual y adaptativa
 * Incluye parser inteligente que detecta automáticamente la estructura del contenido
 */
export const InsightCard: React.FC<InsightCardProps> = ({ text, sources }) => {
  /**
   * Parser inteligente que analiza el texto y detecta su estructura
   */
  const parseInsight = (content: string): { introduction: string; sections: ParsedSection[] } => {
    const lines = content.split('\n').filter(line => line.trim());
    const introduction: string[] = [];
    const sections: ParsedSection[] = [];
    let inIntroduction = true;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Detectar listas numeradas (1., 2., 3., etc.)
      const numberedListMatch = trimmedLine.match(/^(\d+)\.\s*\*\*(.+?)\*\*\s*(.*)$/);
      if (numberedListMatch) {
        inIntroduction = false;
        const [, , title, rest] = numberedListMatch;

        // Buscar significado y ejemplo en las siguientes líneas o en la misma línea
        let description = rest;
        let example = '';

        // Buscar patrón de significado
        const meaningMatch = rest.match(/\*\*Significado:\*\*\s*(.+?)(?=\*\*|$)/);
        if (meaningMatch) {
          description = meaningMatch[1].trim();
        }

        // Buscar patrón de ejemplo
        const exampleMatch = rest.match(/\*\*Ejemplo:\*\*\s*(.+?)(?:\(|$)/);
        if (exampleMatch) {
          example = exampleMatch[1].trim();
        }

        sections.push({
          type: 'list-item',
          content: {
            title: title.trim(),
            description: description.trim() || undefined,
            example: example || undefined,
          },
        });
        return;
      }

      // Detectar listas con viñetas o símbolos
      const bulletMatch = trimmedLine.match(/^[•\-\*]\s*(.+)$/);
      if (bulletMatch) {
        inIntroduction = false;
        sections.push({
          type: 'list-item',
          content: {
            text: bulletMatch[1].trim(),
          },
        });
        return;
      }

      // Detectar definiciones (líneas con **Término:** seguido de descripción)
      const definitionMatch = trimmedLine.match(/^\*\*(.+?):\*\*\s*(.+)$/);
      if (definitionMatch) {
        inIntroduction = false;
        sections.push({
          type: 'definition',
          content: {
            title: definitionMatch[1].trim(),
            description: definitionMatch[2].trim(),
          },
        });
        return;
      }

      // Detectar ejemplos (líneas que empiezan con comillas o contienen "Ejemplo:")
      if (trimmedLine.startsWith('"') || trimmedLine.toLowerCase().includes('ejemplo:')) {
        inIntroduction = false;
        const exampleText = trimmedLine.replace(/\*\*ejemplo:\*\*/i, '').trim();
        sections.push({
          type: 'example',
          content: {
            text: exampleText,
          },
        });
        return;
      }

      // Si estamos en la introducción y no hemos detectado ningún patrón especial
      if (inIntroduction) {
        introduction.push(trimmedLine);
      } else {
        // Agregar como párrafo normal
        if (trimmedLine.length > 0) {
          sections.push({
            type: 'paragraph',
            content: {
              text: trimmedLine,
            },
          });
        }
      }
    });

    return {
      introduction: introduction.join(' '),
      sections,
    };
  };

  const parsed = parseInsight(text);
  const hasStructuredContent = parsed.sections.length > 0;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-fade-in-up">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-700 dark:to-purple-800 px-8 py-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="relative flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner border border-white/30">
            <Lightbulb className="w-6 h-6 text-yellow-300" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Insight</h3>
            <p className="text-indigo-100 text-sm font-medium">AI-Powered Analysis</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        {/* Introducción */}
        {parsed.introduction && (
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <RichTextRenderer text={parsed.introduction} className="text-lg leading-relaxed text-slate-700 dark:text-slate-300" />
          </div>
        )}

        {/* Secciones estructuradas */}
        {hasStructuredContent && (
          <div className="space-y-4">
            {/* Separador visual si hay introducción */}
            {parsed.introduction && (
              <div className="flex items-center gap-4 py-2">
                <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Points</span>
                <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
              </div>
            )}

            <div className="grid gap-4">
              {parsed.sections.map((section, index) => {
                switch (section.type) {
                  case 'list-item':
                    return (
                      <ContentBlock
                        key={index}
                        variant="list-item"
                        title={section.content.title}
                        description={section.content.description || section.content.text}
                        example={section.content.example}
                      />
                    );

                  case 'definition':
                    return (
                      <ContentBlock
                        key={index}
                        variant="definition"
                        title={section.content.title}
                        description={section.content.description}
                      />
                    );

                  case 'example':
                    return (
                      <ContentBlock
                        key={index}
                        variant="example"
                        text={section.content.text}
                      />
                    );

                  case 'paragraph':
                    return (
                      <div key={index} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <RichTextRenderer
                          text={section.content.text || ''}
                          className="text-base text-slate-600 dark:text-slate-400"
                        />
                      </div>
                    );

                  default:
                    return null;
                }
              })}
            </div>
          </div>
        )}

        {/* Si no hay estructura, mostrar texto completo con formato mejorado */}
        {!hasStructuredContent && !parsed.introduction && (
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <RichTextRenderer text={text} className="text-lg leading-relaxed" />
          </div>
        )}

        {/* Fuentes */}
        {sources && sources.length > 0 && (
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              Sources & References
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {sources.map((source, idx) => (
                <SourceCard
                  key={idx}
                  title={source.title}
                  uri={source.uri}
                  index={idx}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
