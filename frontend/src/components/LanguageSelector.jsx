import React from 'react';
import { INDIAN_LANGUAGES } from '../utils/languageList';

const LanguageSelector = ({ selected, onChange, label, disabled = false }) => {
  return (
    <div className="flex flex-col flex-grow">
      {label && <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>}
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      >
        {INDIAN_LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
