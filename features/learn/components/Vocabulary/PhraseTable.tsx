import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FunctionalChunk } from '../../../../types';

interface PhraseTableProps {
  chunks: FunctionalChunk[];
}

export const PhraseTable: React.FC<PhraseTableProps> = ({ chunks }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 divide-y divide-slate-100 dark:divide-slate-800">
        {chunks.map((chunk, i) => (
          <div
            key={i}
            className={`transition-colors duration-200 ${
              expandedIndex === i
                ? 'bg-indigo-50/50 dark:bg-indigo-900/10'
                : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
            }`}
          >
            <button
              onClick={() => toggleExpand(i)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-800/50"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className={`p-2 rounded-lg transition-colors ${
                  expandedIndex === i
                    ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400'
                    : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500'
                }`}>
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-semibold text-indigo-900 dark:text-indigo-300 text-lg mb-1">
                    {chunk.chunk}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {chunk.usage}
                  </span>
                </div>
              </div>

              <div className={`transform transition-transform duration-300 ${expandedIndex === i ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </div>
            </button>

            {/* Expandable Content - Could be used for examples if added to the data structure later */}
            {/* Currently just adding a visual indicator or extra context if available */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === i ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-5 pl-[4.5rem]">
                <div className="text-sm text-slate-600 dark:text-slate-300 italic border-l-2 border-indigo-300 pl-3">
                  Use this phrase when you want to {chunk.usage.toLowerCase()}.
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
