import React, { useState } from 'react';
import '../../App.css';
import ActionButton from '../../ActionButton.js';
import data from '../../data.json';
import SoccerDropInTitle2 from './SoccerDropInTitle2.js';

function Sports() {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'french' : 'english');
  };

  return (
    <div className="dropin-content">
      <SoccerDropInTitle2 language={language} />
      <div className='buttonChoice'>
        <ActionButton text={language === 'english' ? 'Recreational' : 'Récréatif'} to="/recreationalPickup" />
        <br></br>
        <ActionButton text={language === 'english' ? 'Competitive' : 'Compétitif'} to="/competitivePickup" />
      </div>
      <div className='toggle-language-btn'>
        <button onClick={toggleLanguage}>{language === 'english' ? 'FR' : 'EN'}</button>
      </div>
    </div>
  );
}

export default Sports;