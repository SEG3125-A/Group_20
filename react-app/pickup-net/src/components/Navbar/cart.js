import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import './cart.css';

function Cart() {
    const { cart, removeFromCart } = useCart();

    const handleRemoveFromCart = (index) => {
        removeFromCart(index);
    };

    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            if (item.cost) {
                total += parseFloat(item.cost);
            }
        });
        return total.toFixed(2);
    };

    const total = calculateTotal();

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
            <div className='checkout-button'>
                <Link to={{ pathname: "/checkout", state: { total } }} className="checkoutButton">Checkout</Link>
            </div>
        </div>
    );
}

export default Cart;