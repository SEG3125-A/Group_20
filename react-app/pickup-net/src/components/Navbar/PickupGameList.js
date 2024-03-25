import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import './pickup.css';
import Cart from './cart.js';
import {useCart} from './CartContext'

function PickupGameList({ games, isFrench, toggleLanguage }) {
    const [cart, setCart] = useState([]);

    const { addToCart } = useCart();

    return (
        <div className="pickup-game-list">
            {games.map((game, index) => (
                <div key={index} className="pickup-game-item">
                    <h3>{isFrench ? game.french.title : game.title}</h3>
                    <p>{isFrench ? `Sport: ${game.french.sport}` : `Sport: ${game.sport}`}</p>
                    <p>{isFrench ? `Niveau: ${game.french.level}` : `Level: ${game.level}`}</p>
                    <p>{isFrench ? `Genre: ${game.french.gender}` : `Gender: ${game.gender}`}</p>
                    <p>{isFrench ? `Date: ${game.french.date}` : `Date: ${game.date}`}</p>
                    <p>{isFrench ? `L'heure: ${game.french.time}` : `Time: ${game.time}`}</p>
                    <p style={{ color: '#d0fd1b' }}>{isFrench ? `Emplacement: ${game.french.location}` : `Location: ${game.location}`}</p>
                    <p>{isFrench ? `Coût: ${game.french.cost}` : `Cost: ${game.cost}`}</p>
                    <div onClick={() => addToCart(game)} style={{ cursor: 'pointer', display: 'inline-block', background: 'none', border: 'none', padding: 0 }}>
                        <FaShoppingCart/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PickupGameList;
