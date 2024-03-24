import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import SoccerDropInTitle from './SoccerDropInTitle.js';
import PickupGameList from './PickupGameList.js';
import data from './pickup-soccer-data.json';
import './pickup.css';
import Cart from './cart.js';

function CompetitivePickup() {
    const [cart, setCart] = useState([]);
    const [isFrench, setIsFrench] = useState(false);

    const toggleLanguage = () => {
        setIsFrench(!isFrench);
    };

    const addToCart = (game) => {
        setCart([...cart, game]);
    };

    const competitiveGames = data.filter(game => game.level === 'Advanced' || game.level === 'Professional');

    return (
        <div className='page'>
            <div className="pickup-content">
                <div id='left-side'>
                    <div id='left-content'>
                        <SoccerDropInTitle isFrench={isFrench} pageType="competitive" />
                        <div className="language-toggle">
                            <button onClick={toggleLanguage}>
                                {isFrench ? 'Switch to English' : 'Passer au français'}
                            </button>
                        </div>
                        <div className='buttonChoice'>
                            <Link className="btn btn-primary" to="/sports">{isFrench ? 'Retour' : 'Back'}</Link>
                        </div>
                    </div>
                </div>
                <div id='right-side'>
                    <div className='game-cards'>
                        <PickupGameList games={competitiveGames} addToCart={addToCart} isFrench={isFrench} toggleLanguage={toggleLanguage} />
                    </div>
                </div>
            </div>
            <Cart cart={cart} />
        </div>
    );
}

export default CompetitivePickup;