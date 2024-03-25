import React, { useState } from 'react';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';
import './checkout.css';

function Checkout() {
    const { cart } = useCart();
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: '',
        total: calculateTotal(cart)
    });

    function calculateTotal(cart) {
        let total = 0;
        cart.forEach(item => {
            if (item.cost) {
                total += parseFloat(item.cost);
            }
        });
        return total.toFixed(2);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Payment successful!', {
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
        <div className="page">
            <h2>Checkout</h2>
            <div className="checkout-container">
                <div className="checkout-rows">
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="cardNumber">Card Number</label>
                                <input type="text" className="form-control" id="cardNumber" name="cardNumber" value={paymentDetails.cardNumber} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expiryDate">Expiry Date</label>
                                <input type="text" className="form-control" id="expiryDate" name="expiryDate" value={paymentDetails.expiryDate} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" className="form-control" id="cvv" name="cvv" value={paymentDetails.cvv} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name on Card</label>
                                <input type="text" className="form-control" id="name" name="name" value={paymentDetails.name} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Total Amount:</label>
                                <input type="text" className="form-control" value={`$${paymentDetails.total}`} readOnly />
                            </div>
                            <button type="submit" className="btn btn-primary" id='btn-checkout'>Pay Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;