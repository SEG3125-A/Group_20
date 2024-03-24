import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './notificationform.css';
import data from '../../data.json';

function NotificationForm({ language }) {
    const [email, setEmail] = useState('');
    const { notificationForm } = data.title;
    const buttonText = notificationForm[language].buttonText;
    const placeholderText = notificationForm[language].placeholderText;

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email submitted:', email);
      setEmail('');
      toast.success('Submitted successfully!', {
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
      <div className='notification-form'>
        <h3>{notificationForm[language].title}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={placeholderText}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    );
  }
  
  export default NotificationForm;