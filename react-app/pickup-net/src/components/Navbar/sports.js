import React from 'react';
import '../../App.css';
import SoccerDropInTitle from './SoccerDropInTitle.js';
import ActionButton from '../../ActionButton.js';

function Sports() {
  return (
    <div className="dropin-content">
      <div>
        <SoccerDropInTitle/>
      </div>
      <div className='buttonChoice'>
        <ActionButton text="Recreational" to="/recreationalPickup" />
        <br></br>
        <ActionButton text="Competitive" to="/competitivePickup" />
      </div>
      
    </div>
  );
}

export default Sports;
