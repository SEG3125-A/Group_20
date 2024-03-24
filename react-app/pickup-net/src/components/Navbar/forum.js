import React from 'react';
import '../../App.css';
import ForumTitle from './ForumTitle.js';
import NotificationForm from './NotificationForm'; 
import './notificationform.css';
import ActionButton from '../../ActionButton.js';

function Forum() {
  return (
    <div className="dropin-content">
      <ForumTitle/>
      <NotificationForm />
    </div>
  );
}

export default Forum;