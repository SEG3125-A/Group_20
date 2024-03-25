import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../../App.css';
import SoccerDropInTitle from './SoccerDropInTitle.js';
import PickupGameList from './PickupGameList.js';
import data from './pickup-soccer-data.json';
import './pickup.css';
import Cart from './cart.js';
import '../../data.json';
import {useCart} from './CartContext'

function RecreationalPickup() {
    const [isFrench, setIsFrench] = useState(false);

    const toggleLanguage = () => {
        setIsFrench(!isFrench);
    };

    const { addToCart } = useCart();

    const recreationalGames = data.filter(game => game.level === 'Beginner' || game.level === 'Intermediate');

    return (
        <div className='page'>
            <div className="pickup-content">
                <div id='left-side'>
                    <div id='left-content'>
                    <SoccerDropInTitle isFrench={isFrench} pageType="recreational" />
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
                        <PickupGameList games={recreationalGames} addToCart={addToCart} isFrench={isFrench} toggleLanguage={toggleLanguage} />
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </div>
    );
}

export default RecreationalPickup;