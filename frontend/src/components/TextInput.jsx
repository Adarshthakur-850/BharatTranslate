import React, { useState } from 'react';
import { Mic, MicOff, X } from 'lucide-react';

const TextInput = ({ value, onChange, placeholder, onClear, sourceLang }) => {
  const [isListening, setIsListening] = useState(false);

  const handleListen = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }
    
    if (isListening) {
      // It's hard to stop explicitly without keeping the reference, so we just update state
      // Realistically we'd keep the recognition instance in a ref, but simple state is okay for UI toggle
      setIsListening(false);
      return;
    }
    
    const recognition = new SpeechRecognition();
    recognition.lang = sourceLang || 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onChange(value ? value + " " + transcript : transcript);
    };
    recognition.onerror = (event) => {
      console.error(event.error);
      setIsListening(false);
    };
    
    recognition.start();
  };

  return (
    <div className="relative border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm h-64 flex flex-col focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
      <textarea
        className="w-full h-full p-4 text-lg resize-none outline-none border-none bg-transparent"
        placeholder={placeholder || "Enter text here..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="flex justify-between items-center p-2 bg-gray-50 border-t border-gray-200">
        <button 
          onClick={handleListen}
          className={`p-2 rounded-full hover:bg-gray-200 transition-colors ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-500'}`} 
          title="Voice Input"
        >
          {isListening ? <MicOff className="w-5 h-5 animate-pulse" /> : <Mic className="w-5 h-5" />}
        </button>
        {value && (
          <button 
            onClick={onClear}
            className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TextInput;
