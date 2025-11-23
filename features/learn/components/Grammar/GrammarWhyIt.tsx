import React from 'react';

interface GrammarWhyItProps {
  whyCrucial?: string;
}

/**
 * GrammarWhyIt Component
 * Shows why mastering this grammar point is crucial in IT and professional communication
 */
export const GrammarWhyIt: React.FC<GrammarWhyItProps> = ({ whyCrucial }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 rounded-3xl shadow-2xl">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-16 -mb-16 blur-3xl pointer-events-none"></div>

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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Why It's Crucial</span>
            <div className="w-12 h-0.5 bg-blue-300 mt-1 rounded-full"></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-white leading-tight">
          Why it's crucial in IT
        </h2>

        {/* Content */}
        <div className="max-w-4xl">
          <div className="text-base md:text-lg text-blue-50 space-y-6">

            {/* Use cases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 text-2xl">💡</span>
                  <span>Introductions during stand-ups, onboarding, and networking</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 text-2xl">📊</span>
                  <span>Describing your job title, tech stack, or responsibilities</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 text-2xl">✨</span>
                  <span>Updating the status of tasks, servers, deployments, or tickets</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 text-2xl">💬</span>
                  <span>Communicating clearly with colleagues, clients, PMs, and stakeholders</span>
                </div>
              </div>
            </div>

            {/* Grammar rule */}
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">The rule is simple and never changes in the present tense:</h3>
                <div className="text-xl md:text-2xl text-blue-100 font-bold">
                  I → <span className="text-white">am</span> |
                  You / We / They → <span className="text-white">are</span> |
                  He / She / It → <span className="text-white">is</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex items-center gap-2 text-blue-200 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Mastering this structure will boost your professional communication in tech environments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
