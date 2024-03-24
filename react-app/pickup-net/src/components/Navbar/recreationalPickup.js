import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../../App.css';
import SoccerDropInTitle from './SoccerDropInTitle.js';
import PickupGameList from './PickupGameList.js';
import data from './pickup-soccer-data.json';
import './pickup.css';
import Cart from './cart.js';

function RecreationalPickup() {
    const [cart, setCart] = useState([]);

    const addToCart = (game) => {
        setCart([...cart, game]);
    };

    const recreationalGames = data.filter(game => game.level === 'Beginner' || game.level === 'Intermediate');

    return (
        <div className='page'>
            <div className="pickup-content">
                <div id='left-side'>
                    <div id='left-content'>
                        <div className="title-container">
                            <h1>DROP IN</h1>
                            <h1 className="yellow-text">SOCCER</h1>
                            <h2><i>Recreational</i>.</h2>
                        </div>
                        <div className='buttonChoice'>
                            <Link className="btn btn-primary" to="/sports">Back</Link>
                        </div>
                    </div>
                </div>
                <div id='right-side'>
                    <div className='game-cards'>
                        <PickupGameList games={recreationalGames} addToCart={addToCart} />
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/cart" element={<Cart cart={cart} />} />
            </Routes>
        </div>
    );
}

export default RecreationalPickup;