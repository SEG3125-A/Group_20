import React from 'react';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';

function Cart() {
    const { cart, removeFromCart } = useCart();

    const handleRemoveFromCart = (index) => {
        removeFromCart(index);
    };

    const styles = {
        cartTitle: {
            paddingBottom: '40px',
        },
        cartItem: {
            marginBottom: '20px',
            borderBottom: '1px solid #eee',
            paddingBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        cartItemDetails: {
            flexGrow: 1,
            textAlign: 'center',
        },
        detail: {
            marginBottom: '5px',
        },
        removeButton: {
            padding: '5px 10px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
        },
    };

    return (
        <div className='page'>
            <div className='cart'>
                <h2 style={styles.cartTitle}>Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {cart.map((item, index) => (
                            <div key={index} style={styles.cartItem}>
                                <div style={styles.cartItemDetails}>
                                    <h4>{item.title}</h4>
                                    <p style={styles.detail}>Sport: {item.sport}</p>
                                    <p style={styles.detail}>Level: {item.level}</p>
                                    <p style={styles.detail}>Gender: {item.gender}</p>
                                    <p style={styles.detail}>Date: {item.date}</p>
                                    <p style={styles.detail}>Time: {item.time}</p>
                                    <p style={styles.detail}>Location: {item.location}</p>
                                    <p style={styles.detail}>Cost: {item.cost ? `${item.cost}` : 'Price not available'}</p>
                                </div>
                                <button style={styles.removeButton} onClick={() => handleRemoveFromCart(index)}>Remove</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
