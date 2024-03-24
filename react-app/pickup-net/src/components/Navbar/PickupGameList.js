import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import './pickup.css';
import Cart from './cart.js';


function PickupGameList({ games }) {
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
                    <h3>{game.title}</h3>
                    <p>Sport: {game.sport}</p>
                    <p>Level: {game.level}</p>
                    <p>Gender: {game.gender}</p>
                    <p>Date: {game.date}</p>
                    <p>Time: {game.time}</p>
                    <p style={{ color: '#d0fd1b' }}>Location: {game.location}</p>
                    <p>Cost: {game.cost}</p>
                    <div className="add-to-cart" onClick={() => addToCart(game)}>
                        <FaShoppingCart/>
                    </div>
                </div>
            ))}
            {/* <Link className="btn btn-primary" to="/cart">View Cart</Link> */}
        </div>
    );
}

export default PickupGameList;
