import React, { useState } from 'react';
import '../../App.css';
import LeaguesTitle from './LeaguesTitle.js';
import NotificationForm from './NotificationForm'; 
import './notificationform.css';
import ActionButton from '../../ActionButton.js';
import data from '../../data.json';

function Leagues() {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'french' : 'english');
  };

  return (
    <div className="dropin-content">
      <LeaguesTitle language={language} />
      <NotificationForm language={language} />
      <div className='toggle-language-btn'>
        <button onClick={toggleLanguage}>{language === 'english' ? 'FR' : 'EN'}</button>
      </div>
    </div>
  );
}

export default Leagues;