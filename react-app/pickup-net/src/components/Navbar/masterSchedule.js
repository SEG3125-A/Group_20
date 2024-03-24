import React, { useState } from 'react';
import '../../App.css';
import ScheduleTitle from './ScheduleTitle.js';

function MasterSchedule() {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'french' : 'english');
  };

  return (
    <div className="dropin-content">
      <ScheduleTitle language={language} />
      <div className='toggle-language-btn'>
        <button onClick={toggleLanguage}>{language === 'english' ? 'FR' : 'EN'}</button>
      </div>
    </div>
  );
}

export default MasterSchedule;
