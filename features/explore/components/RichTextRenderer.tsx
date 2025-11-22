import React from 'react';

interface RichTextRendererProps {
  text: string;
  className?: string;
}

/**
 * Componente para renderizar texto enriquecido con formato automático
 * Detecta y estiliza:
 * - Texto en **negrita** como términos clave
 * - Texto en *cursiva* como énfasis
 * - Texto entre "comillas" como ejemplos
 */
export const RichTextRenderer: React.FC<RichTextRendererProps> = ({ text, className = '' }) => {
  const renderFormattedText = (content: string) => {
    const parts: React.ReactNode[] = [];
    let currentIndex = 0;
    let key = 0;

    // Regex para detectar patrones de formato
    const patterns = [
      { regex: /\*\*(.+?)\*\*/g, type: 'bold' },
      { regex: /\*(.+?)\*/g, type: 'italic' },
      { regex: /"(.+?)"/g, type: 'quote' },
    ];

    // Encontrar todas las coincidencias
    const matches: Array<{ start: number; end: number; text: string; type: string }> = [];

    patterns.forEach(({ regex, type }) => {
      const regexCopy = new RegExp(regex.source, regex.flags);
      let match;
      while ((match = regexCopy.exec(content)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[1],
          type,
        });
      }
    });

    // Ordenar por posición
    matches.sort((a, b) => a.start - b.start);

    // Renderizar texto con formato
    matches.forEach((match) => {
      // Agregar texto antes del match
      if (currentIndex < match.start) {
        parts.push(
          <span key={`text-${key++}`}>
            {content.substring(currentIndex, match.start)}
          </span>
        );
      }

      // Agregar texto formateado
      if (match.type === 'bold') {
        parts.push(
          <strong
            key={`bold-${key++}`}
            className="font-bold text-indigo-900 dark:text-indigo-300"
          >
            {match.text}
          </strong>
        );
      } else if (match.type === 'italic') {
        parts.push(
          <em
            key={`italic-${key++}`}
            className="italic text-slate-800 dark:text-slate-200 font-medium"
          >
            {match.text}
          </em>
        );
      } else if (match.type === 'quote') {
        parts.push(
          <span
            key={`quote-${key++}`}
            className="inline-block px-1.5 rounded bg-amber-100/50 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 font-medium italic mx-0.5"
          >
            "{match.text}"
          </span>
        );
      }

      currentIndex = match.end;
    });

    // Agregar texto restante
    if (currentIndex < content.length) {
      parts.push(
        <span key={`text-${key++}`}>
          {content.substring(currentIndex)}
        </span>
      );
    }

    return parts.length > 0 ? parts : content;
  };

  return (
    <div className={`text-slate-700 dark:text-slate-300 leading-relaxed ${className}`}>
      {renderFormattedText(text)}
    </div>
  );
};
