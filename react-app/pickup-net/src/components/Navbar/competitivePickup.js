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

    const addToCart = (game) => {
        setCart([...cart, game]);
    };

    const competitiveGames = data.filter(game => game.level === 'Advanced' || game.level === 'Professional');

    return (
        <div className='page'>
            <div className="pickup-content">
                <div id='left-side'>
                    <div id='left-content'>
                        <div className="title-container">
                            <h1>DROP IN</h1>
                            <h1 className="yellow-text">SOCCER</h1>
                            <h2><i>Competitive</i>.</h2>
                        </div>
                        <div className='buttonChoice'>
                            <Link className="btn btn-primary" to="/sports">Back</Link>
                        </div>
                    </div>
                </div>
                <div id='right-side'>
                    <div className='game-cards'>
                        {/* Pass the addToCart function as a prop */}
                        <PickupGameList games={competitiveGames} addToCart={addToCart} />
                    </div>
                </div>
            </div>
            {/* Render the Cart component */}
            <Cart cart={cart} />
        </div>
    );
}

export default CompetitivePickup;
