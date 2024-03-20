import React from 'react';
import './App.css';
import ActionButton from './ActionButton.js'

function Title() {
  return (
    <div className="title-container">
      <h1>PICKUP</h1>
      <h1 className="yellow-text">SPORTS</h1>
      <p>Find casual and competitive matches near you.</p>
      <p>No commitment.</p>
      <ActionButton/>
    </div>
  );
}

export default Title;
