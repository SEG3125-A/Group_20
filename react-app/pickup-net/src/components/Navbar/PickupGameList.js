import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import './pickup.css';
import Cart from './cart.js';

function PickupGameList({ games, isFrench, toggleLanguage }) {
    const [cart, setCart] = useState([]);

    const addToCart = (game) => {
        setCart([...cart, game]);
        toast.success(`"${game.title}" added to cart successfully!`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: 'black',
                color: 'white'
            }
        });
    };

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
                    <div className="add-to-cart" onClick={() => addToCart(game)}>
                        <FaShoppingCart/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PickupGameList;
