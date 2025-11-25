import React, { useState } from 'react';
import { searchCulturalFact } from '../../services';
import { Button } from '../../components';
import { InsightCard } from './components';
import { Search, Sparkles, Loader2 } from 'lucide-react';
import { SEOHead } from '../../components/SEO';
import { getSEOForRoute } from '../../utils/seoConfig';

export const CulturalExplorer: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<{ text: string; sources: any[] } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    try {
      const data = await searchCulturalFact(query);
      setResult(data);
    } catch (error) {
      console.error('Search failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEOHead {...getSEOForRoute('/explore')} />
      <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4 py-8">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
          <Sparkles className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Cultural Context Explorer
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Discover the hidden meanings, origins, and cultural nuances behind idioms and slang.
          Powered by AI search.
        </p>
      </div>

      {/* Search Section */}
      <div className="relative max-w-2xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center bg-white dark:bg-slate-800 rounded-xl shadow-xl p-2">
            <div className="pl-4 text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="e.g., 'Why do Americans say break a leg?'"
              className="flex-1 p-4 bg-transparent text-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            />
            <Button
              onClick={handleSearch}
              isLoading={isLoading}
              className="px-8 py-3 text-lg font-medium rounded-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
            >
              {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                'Explore'
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mt-12">
        {isLoading && !result && (
          <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-fade-in">
            <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
            <p className="text-slate-500 dark:text-slate-400 animate-pulse">Searching cultural database...</p>
          </div>
        )}

        {result && (
          <div className="animate-fade-in-up">
            <InsightCard text={result.text} sources={result.sources} />
          </div>
        )}
      </div>
    </div>
    </>
  );
};
