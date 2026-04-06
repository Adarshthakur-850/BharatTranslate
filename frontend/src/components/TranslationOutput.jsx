import React, { useState, useEffect } from 'react';
import { Copy, Check, Volume2, VolumeX } from 'lucide-react';

const TranslationOutput = ({ text, isLoading, error, targetLang }) => {
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    if (!text) return;
    
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = targetLang || 'hi-IN';
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="relative border border-gray-200 rounded-lg bg-gray-50 overflow-hidden shadow-sm h-64 flex flex-col transition-all">
      <div className="flex-grow p-4 text-lg overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-full text-blue-500">
            <div className="animate-pulse flex space-x-2">
               <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
               <div className="w-3 h-3 bg-blue-500 rounded-full animation-delay-200"></div>
               <div className="w-3 h-3 bg-blue-500 rounded-full animation-delay-400"></div>
            </div>
          </div>
        ) : error ? (
          <span className="text-red-500">{error}</span>
        ) : text ? (
          <span className="text-gray-800">{text}</span>
        ) : (
          <span className="text-gray-400 italic">Translation will appear here...</span>
        )}
      </div>
      
      <div className="flex justify-end items-center p-2 border-t border-gray-200 bg-gray-100">
        <button 
          onClick={handleSpeak}
          className={`p-2 mr-2 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 ${isSpeaking ? 'text-blue-600 bg-blue-50' : 'text-gray-500'}`}
          disabled={!text || isLoading}
          title="Play Output"
        >
          {isSpeaking ? <VolumeX className="w-5 h-5 animate-pulse" /> : <Volume2 className="w-5 h-5" />}
        </button>
        <button 
          onClick={handleCopy}
          disabled={!text || isLoading}
          className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors disabled:opacity-50"
          title="Copy to clipboard"
        >
          {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default TranslationOutput;
