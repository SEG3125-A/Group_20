import React from 'react';
import '../../App.css';
import LeaguesTitle from './LeaguesTitle.js';
import NotificationForm from './NotificationForm'; 
import './notificationform.css';
import ActionButton from '../../ActionButton.js';

function Leagues() {
  return (
    <div className="dropin-content">
      <LeaguesTitle/>
      <NotificationForm />
    </div>
  );
}

export default Leagues;