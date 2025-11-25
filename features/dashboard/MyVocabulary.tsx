import React, { useEffect, useState } from 'react';
import { BookOpen, Trash2, TrendingUp, Calendar } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { SEOHead } from '../../components/SEO';
import { getSEOForRoute } from '../../utils/seoConfig';

export const MyVocabulary: React.FC = () => {
  const {
    vocabulary,
    isVocabularyLoaded,
    loadVocabulary,
    deleteVocabularyWord,
    updateWordMastery
  } = useStore();

  const [filter, setFilter] = useState<'all' | number>('all');
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  // Cargar vocabulario si aún no está cargado
  useEffect(() => {
    if (!isVocabularyLoaded) {
      setIsLocalLoading(true);
      loadVocabulary()
        .catch((err) => {
          console.error('[MyVocabulary] Failed to load vocabulary:', err);
        })
        .finally(() => {
          setIsLocalLoading(false);
        });
    }
  }, [isVocabularyLoaded, loadVocabulary]);

  // Filtrar localmente (sin hacer queries a Supabase)
  const filteredVocabulary = filter === 'all'
    ? vocabulary
    : vocabulary.filter(v => v.mastery_level === filter);

  const handleDelete = async (id: string) => {
    try {
      await deleteVocabularyWord(id);
    } catch (error) {
      console.error('Error deleting word:', error);
    }
  };

  const handleUpdateMastery = async (id: string, level: number) => {
    try {
      await updateWordMastery(id, level);
    } catch (error) {
      console.error('Error updating mastery:', error);
    }
  };

  const getMasteryColor = (level: number) => {
    const colors = [
      'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
      'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
      'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
      'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
      'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    ];
    return colors[level] || colors[0];
  };

  const getMasteryLabel = (level: number) => {
    const labels = ['New', 'Beginner', 'Learning', 'Practicing', 'Good', 'Mastered'];
    return labels[level] || 'New';
  };

  // Mostrar loading mientras se está cargando inicialmente O mientras se recarga
  if (isLocalLoading || !isVocabularyLoaded) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading your vocabulary...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead {...getSEOForRoute('/my-vocabulary')} />
      <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          My Vocabulary
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {filteredVocabulary.length} {filteredVocabulary.length === 1 ? 'word' : 'words'}
          {filter !== 'all' && ` (${vocabulary.length} total)`}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
            filter === 'all'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
          }`}
        >
          All Words
        </button>
        {[0, 1, 2, 3, 4, 5].map(level => (
          <button
            key={level}
            onClick={() => setFilter(level)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              filter === level
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
            }`}
          >
            {getMasteryLabel(level)}
          </button>
        ))}
      </div>

      {/* Vocabulary List */}
      {filteredVocabulary.length === 0 ? (
        <div className="text-center py-16">
          <BookOpen className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
            {filter === 'all'
              ? 'No words saved yet'
              : `No ${getMasteryLabel(filter as number)} words`}
          </h3>
          <p className="text-gray-500 dark:text-gray-500">
            {filter === 'all'
              ? 'Start saving words from your lessons to build your personal vocabulary'
              : 'Try a different mastery level filter'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVocabulary.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all group"
            >
              {/* Word Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.word}
                  </h3>
                  {item.translation && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.translation}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  title="Delete word"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Mastery Level Selector */}
              <div className="mb-3">
                <label className="text-xs text-gray-500 dark:text-gray-500 mb-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Mastery Level
                </label>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4, 5].map(level => (
                    <button
                      key={level}
                      onClick={() => handleUpdateMastery(item.id, level)}
                      className={`flex-1 py-1 px-2 rounded text-xs font-medium transition-all ${
                        item.mastery_level === level
                          ? getMasteryColor(level)
                          : 'bg-gray-50 text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-600 dark:hover:bg-gray-700'
                      }`}
                      title={getMasteryLabel(level)}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(item.created_at).toLocaleDateString()}
                </span>
                {item.lesson_id && (
                  <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                    {item.lesson_id}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};
