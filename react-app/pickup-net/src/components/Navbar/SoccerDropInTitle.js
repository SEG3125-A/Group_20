import React from 'react';
import data from '../../data.json';

function SoccerDropInTitle({ isFrench, pageType }) {
    let pickupType;
    if (pageType === 'recreational') {
        pickupType = data.title.recreationalPickup;
    } else if (pageType === 'competitive') {
        pickupType = data.title.competitivePickup;
    }

    const getTitle = () => {
        if (isFrench) {
            return pickupType.french.mainTitle;
        } else {
            return pickupType.english.mainTitle;
        }
    };

    const getSubtitle = () => {
        if (isFrench) {
            return pickupType.french.subTitle;
        } else {
            return pickupType.english.subTitle;
        }
    };

    const getDescription = () => {
        if (isFrench) {
            return pickupType.french.description;
        } else {
            return pickupType.english.description;
        }
    };

    return (
        <div className="title-container">
            <h1>{getTitle()}</h1>
            {getSubtitle() && <h1 className="yellow-text">{getSubtitle()}</h1>}
            <h2><i>{getDescription()}</i>.</h2>
        </div>
    );
}

export default SoccerDropInTitle;