import React, { useState } from 'react';
import LanguageSelector from '../components/LanguageSelector';
import TextInput from '../components/TextInput';
import TranslationOutput from '../components/TranslationOutput';
import { ArrowLeftRight, Search } from 'lucide-react';
import { translateText } from '../services/api';

const Home = () => {
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('hi');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setInputText(outputText);
    setOutputText('');
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    setError(null);
    try {
      const result = await translateText(inputText, sourceLang, targetLang);
      setOutputText(result.translated_text);
    } catch (err) {
      setError("Failed to translate: " + (err.response?.data?.detail || err.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-6 pt-6 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">BharatTranslate</h1>
        <p className="text-gray-500">Seamless translation across 22 official Indian languages</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
        {/* Language Selection Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-2/5">
            <LanguageSelector 
              selected={sourceLang} 
              onChange={setSourceLang} 
              label="Translate from"
            />
          </div>
          
          <button 
            onClick={handleSwapLanguages}
            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors transform hover:scale-105"
            title="Swap languages"
          >
            <ArrowLeftRight className="w-5 h-5" />
          </button>
          
          <div className="w-full sm:w-2/5">
            <LanguageSelector 
              selected={targetLang} 
              onChange={setTargetLang} 
              label="Translate to"
            />
          </div>
        </div>

        {/* Translation Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput 
            value={inputText}
            onChange={setInputText}
            sourceLang={sourceLang}
            onClear={() => { setInputText(''); setOutputText(''); }}
          />
          <TranslationOutput 
            text={outputText}
            isLoading={isLoading}
            error={error}
            targetLang={targetLang}
          />
        </div>

        {/* Action Button */}
        <div className="flex justify-center pt-2">
          <button
            onClick={handleTranslate}
            disabled={!inputText.trim() || isLoading}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-md transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
            <span>Translate</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
