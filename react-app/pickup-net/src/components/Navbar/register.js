import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css';
import Registered from "./registered.js";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, email, password });
        navigate(`/registered?email=${email}`);
    };

    return (
        <div className="page">
            <div id="sign">
                <h1>WELCOME</h1>
                <p>Create an account to access drop-in games and leagues near you.</p>
            </div>
            <main className='registerPage'>
                <h1 className='registerTitle'>Sign Up</h1>
                <form className='registerForm' onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type='text'
                        name='email'
                        id='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='registerBtn' type='submit'>REGISTER</button>
                    <p>
                        Have an account? <Link to='/login'>Sign in</Link>
                    </p>
                </form>
            </main>
        </div>
    );
};

export default Register;