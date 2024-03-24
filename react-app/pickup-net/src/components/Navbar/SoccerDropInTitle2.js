import React from 'react';
import data from '../../data.json';

function SoccerDropInTitle2({ language }) {
    const { sportsPage } = data;
    const { title, title2, subtitle } = sportsPage[language];

    return (
        <div className="title-container">
            <h1>{title}</h1>
            <h1 className="yellow-text">{title2}</h1>
            <p><i>{subtitle}</i>.</p>
        </div>
    );
}

export default SoccerDropInTitle2;
