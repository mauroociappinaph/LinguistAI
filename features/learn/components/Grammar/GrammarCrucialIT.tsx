import React from 'react';
import ReactMarkdown from 'react-markdown';

interface GrammarCrucialITProps {
  whyCrucial?: string;
}

/**
 * GrammarCrucialIT Component
 * Explains why mastering this grammar point is crucial in IT and professional communication
 */
export const GrammarCrucialIT: React.FC<GrammarCrucialITProps> = ({ whyCrucial }) => {
  if (!whyCrucial || whyCrucial.trim() === '') return null;

  // Custom components for ReactMarkdown to match existing styles
  const MarkdownComponents = {
    strong: ({ children }: any) => <strong className="text-white font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="text-red-200 italic">{children}</em>,
    p: ({ children }: any) => {
      // Check if paragraph starts with the bullet point marker
      const text = Array.isArray(children) ? children.join('') : String(children);

      if (text.startsWith('💡') || text.startsWith('📊') || text.startsWith('🔑') || text.startsWith('🎯')) {
        const parts = text.split('—');
        const bulletTitle = parts[0].trim();
        const bulletContent = parts[1]?.trim() || '';

        return (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/20">
            <div className="flex gap-3 items-start">
              <span className="flex-shrink-0 text-2xl">{bulletTitle.startsWith('💡') ? '💡' : bulletTitle.startsWith('📊') ? '📊' : bulletTitle.startsWith('🔑') ? '🔑' : bulletTitle.startsWith('🎯') ? '🎯' : '•'}</span>
              <div>
                <span className="font-bold text-white">{bulletTitle.replace(/^[💡📊🔑🎯]\s*/, '')}</span>
                {bulletContent && <span className="text-red-100"> — {bulletContent}</span>}
              </div>
            </div>
          </div>
        );
      }

      return <p className="mb-4 text-red-50 leading-relaxed">{children}</p>;
    },
    ul: ({ children }: any) => <div className="space-y-3">{children}</div>,
    li: ({ children }: any) => (
      <div className="flex gap-3 items-start">
        <span className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-3"></span>
        <span className="text-red-100 leading-relaxed">{children}</span>
      </div>
    )
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-pink-600 to-rose-700 dark:from-red-900 dark:via-pink-900 dark:to-rose-900 rounded-3xl shadow-2xl">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/10 rounded-full -ml-16 -mb-16 blur-3xl pointer-events-none"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 p-8 md:p-10">
        {/* Header badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-md shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-200">Why It's Crucial</span>
            <div className="w-12 h-0.5 bg-red-300 mt-1 rounded-full"></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-white leading-tight">
          The IT Impact
        </h2>

        {/* Explanation content */}
        <div className="max-w-4xl">
          <div className="text-base md:text-lg text-red-50">
            <ReactMarkdown components={MarkdownComponents}>
              {whyCrucial}
            </ReactMarkdown>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex items-center gap-2 text-red-200 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Mastering this structure will boost your professional communication effectiveness</span>
          </div>
        </div>
      </div>
    </div>
  );
};
