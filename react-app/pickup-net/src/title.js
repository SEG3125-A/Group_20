import React from 'react';
import './App.css';
import ActionButton from './ActionButton.js'

function Title() {
  return (
    <div>
      <div className="title-container">
      <h1>PICKUP</h1>
      <h1 className="yellow-text">SPORTS</h1>
    </div>
    <div className="title-container">
      <p style={{ fontSize: 'medium' }}>Find casual and competitive matches near you.</p>
      <p style={{ fontSize: 'medium' }}>No commitment.</p>
      <ActionButton text="PLAY WITH US" to="/sports" />
    </div>
    </div>
    
  );
}

export default Title;
