import React from 'react';
import '../../App.css';
import data from '../../data.json';

function ScheduleTitle({ language }) {
  const { mainTitle, subTitle, description } = data.title.scheduleTitle[language];

  return (
    <div className="title-container">
      <h1>{mainTitle}</h1>
      <h1 className="yellow-text">{subTitle}</h1>
      {description.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default ScheduleTitle;