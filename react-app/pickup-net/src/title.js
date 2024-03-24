import React, { useState } from 'react';
import './App.css';
import ActionButton from './ActionButton.js';
import data from './data.json';

function Title() {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'french' : 'english');
  };

  const { mainTitle, subTitle, description, buttonText } = data.title[language];

  return (
    <div>
      <div className="title-container">
        <h1>{mainTitle}</h1>
        <h1 className="yellow-text">{subTitle}</h1>
      </div>
      <div className="title-container">
        {description.map((line, index) => (
          <p key={index} style={{ fontSize: 'medium' }}>{line}</p>
        ))}
        <ActionButton text={buttonText} to="/sports" />
      </div>
      <div className='toggle-language-btn'>
        <button onClick={toggleLanguage}>{language === 'english' ? 'FR' : 'EN'}</button>
      </div>
    </div>
  );
}

export default Title;