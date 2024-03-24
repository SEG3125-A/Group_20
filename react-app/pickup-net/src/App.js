import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar/navbar.css';
import './App.css';
import Navbar from './components/Navbar/navbar.js';
import HelpIcon from './components/HelpIcon/helpIcon.js';
import Sports from './components/Navbar/sports.js';
import Leagues from './components/Navbar/leagues.js';
import MasterSchedule from './components/Navbar/masterSchedule.js';
import Login from './components/Navbar/login.js';
import Register from './components/Navbar/register.js';
import Registered from './components/Navbar/registered.js';
import RecreationalPickup from './components/Navbar/recreationalPickup.js';
import CompetitivePickup from './components/Navbar/competitivePickup.js';
import Cart from './components/Navbar/cart.js';
import Forum from './components/Navbar/forum.js';
import Home from './Home.js';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports/>} />
          <Route path="/leagues" element={<Leagues/>} /> 
          <Route path="/master-schedule" element={<MasterSchedule />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registered" element={<Registered />} />
          <Route path="/recreationalPickup" element={<RecreationalPickup />} />
          <Route path="/competitivePickup" element={<CompetitivePickup />} />
        </Routes>
        <HelpIcon message="Welcome to our sports booking website! You can join pickup games with no commitment, make new connections, and soon - join leagues." />
      </div>
    </Router>
  );
}

export default App;