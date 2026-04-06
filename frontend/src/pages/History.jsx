import React, { useEffect, useState } from 'react';
import { getHistory } from '../services/api';
import { INDIAN_LANGUAGES } from '../utils/languageList';
import { History as HistoryIcon, Clock, Trash2 } from 'lucide-react';

const History = () => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getHistory(50); // Get up to 50 recent
        setHistory(data.history || []);
      } catch (err) {
        console.error("Failed to fetch history");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchHistory();
  }, []);

  const getLangName = (code) => {
    return INDIAN_LANGUAGES.find(l => l.code === code)?.name || code;
  };

  return (
    <div className="pt-8 space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
          <HistoryIcon className="text-blue-600" />
          <span>Translation History</span>
        </h1>
        <button className="text-red-500 hover:text-red-600 flex items-center space-x-1 text-sm font-medium">
          <Trash2 className="w-4 h-4" />
          <span>Clear All</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {isLoading ? (
          <div className="p-10 text-center text-gray-500 flex justify-center">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : history.length === 0 ? (
          <div className="p-10 text-center text-gray-500 flex flex-col items-center space-y-2">
            <Clock className="w-10 h-10 text-gray-300" />
            <p>No translation history yet.</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {history.map((item) => (
              <li key={item.id} className="p-5 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <div className="flex space-x-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-0">
                    <span className="bg-gray-100 px-2 py-1 rounded">{getLangName(item.source_language)}</span>
                    <span className="text-gray-400 mt-1">&rarr;</span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">{getLangName(item.target_language)}</span>
                  </div>
                  <span className="text-xs text-gray-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {new Date(item.timestamp).toLocaleString()}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                  <div className="text-gray-700">{item.original_text}</div>
                  <div className="text-black font-medium">{item.translated_text}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default History;
