import React, { useState } from 'react';
import data from './data.json';

function ToggleLanguage({ onChangeLanguage }) {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    const newLanguage = language === 'english' ? 'french' : 'english';
    setLanguage(newLanguage);
    onChangeLanguage(newLanguage);
  };

  return (
    <button onClick={toggleLanguage}>
      {language === 'english' ? data.languageButtons.french : data.languageButtons.english}
    </button>
  );
}

export default ToggleLanguage;