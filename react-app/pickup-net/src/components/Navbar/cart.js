import React from 'react';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';
import './cart.css';

function Cart() {
    const { cart, removeFromCart } = useCart();

    const handleRemoveFromCart = (index) => {
        removeFromCart(index);
    };

    return (
        <div className='page'>
            <div className='cart'>
                <h2 className='cartTitle'>Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className='shopping-cart'>
                        {cart.map((item, index) => (
                            <div key={index} className='cartItem'>
                                <div className='cartItemDetails'>
                                    <h4>{item.title}</h4>
                                    <p className='detail'>Sport: {item.sport}</p>
                                    <p className='detail'>Level: {item.level}</p>
                                    <p className='detail'>Gender: {item.gender}</p>
                                    <p className='detail'>Date: {item.date}</p>
                                    <p className='detail'>Time: {item.time}</p>
                                    <p className='detail'>Location: {item.location}</p>
                                    <p className='detail'>Cost: {item.cost ? `${item.cost}` : 'Price not available'}</p>
                                </div>
                                <button className='removeButton' onClick={() => handleRemoveFromCart(index)}>Remove</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;