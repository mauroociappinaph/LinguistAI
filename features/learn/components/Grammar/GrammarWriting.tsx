import React from 'react';
import ReactMarkdown from 'react-markdown';

interface GrammarWritingProps {
  writingExamples?: string[];
}

interface WritingExample {
  scenario: string;
  text: string;
}

/**
 * GrammarWriting Component
 * Shows writing examples and practice for the grammar point in IT contexts
 */
export const GrammarWriting: React.FC<GrammarWritingProps> = ({ writingExamples }) => {
  if (!writingExamples || writingExamples.length === 0) return null;

  // Parse writing examples assuming they contain scenario description followed by example text
  const parseExample = (example: string): WritingExample => {
    const lines = example.split('\n');
    if (lines.length >= 2 && lines[0].startsWith('**Scenario:**')) {
      const scenarioLine = lines[0].replace('**Scenario:**', '').trim();
      const text = lines.slice(1).join('\n');
      return { scenario: scenarioLine, text: text };
    }
    // Fallback: assume single line or different format
    return {
      scenario: 'Professional Writing Example',
      text: example
    };
  };

  const examples = writingExamples.map(parseExample);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-500 rounded-lg shadow-md">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white text-xl">Writing Practice</h3>
          <p className="text-sm text-blue-600 dark:text-blue-400">Apply this grammar in your professional writing</p>
        </div>
      </div>

      {/* Examples */}
      <div className="grid gap-6">
        {examples.map((example, idx) => (
          <div
            key={idx}
            className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl border-2 border-blue-200 dark:border-blue-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16"></div>

            {/* Scenario tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium mb-4 shadow-md">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-semibold">Scenario</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{example.scenario}</h4>

            {/* Example text */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border-2 border-blue-100 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-3"></div>
                <div className="flex-1 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  <ReactMarkdown
                    components={{
                      strong: ({ children }: any) => (
                        <span className="font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">
                          {children}
                        </span>
                      ),
                      p: ({ children }: any) => <p className="mb-2">{children}</p>
                    }}
                  >
                    {example.text}
                  </ReactMarkdown>
                </div>
              </div>
            </div>

            {/* Practice note */}
            <div className="mt-4 text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Use this structure in your own work emails, documentation, or reports</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
