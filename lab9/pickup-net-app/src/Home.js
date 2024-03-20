import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar/navbar.css';
import './index.css';
import './App.css';
import Title from './title.js';
import Image from './mainimage.js';

function Home() {
    return (
      <div className="main-content">
        <Image/>
        <Title/>
      </div>
    );
}

export default Home;