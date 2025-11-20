import React, { useState } from 'react';
import { searchCulturalFact } from '../../services';
import { Button } from '../../components';

export const CulturalExplorer: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<{ text: string; sources: any[] } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    const data = await searchCulturalFact(query);
    setResult(data);
    setIsLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Cultural Context Explorer</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Discover the origins of idioms, slang, and cultural references. Powered by Google Search.</p>
      </div>

      <div className="flex gap-2 mb-8">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="e.g., 'Why do Americans say break a leg?'"
          className="flex-1 p-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
        />
        <Button onClick={handleSearch} isLoading={isLoading} className="px-8">
          Explore
        </Button>
      </div>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-800 fade-in">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Insight</h3>
          <div className="prose prose-slate dark:prose-invert text-slate-600 dark:text-slate-300 mb-6">
            {result.text}
          </div>

          {result.sources && result.sources.length > 0 && (
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Sources</h4>
              <ul className="space-y-2">
                {result.sources.map((source: any, idx: number) => (
                  <li key={idx}>
                    <a 
                      href={source.uri} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 truncate"
                    >
                      <span className="w-4 h-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-[10px]">🔗</span>
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};