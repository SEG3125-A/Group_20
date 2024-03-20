import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar/navbar.css';
import './App.css';
import Navbar from './components/Navbar/navbar.js';
import Title from './title.js';
import Image from './mainimage.js';
import HelpIcon from './components/HelpIcon/helpIcon.js';
import Sports from './components/Navbar/sports.js';
import Leagues from './components/Navbar/leagues.js';
import MasterSchedule from './components/Navbar/masterSchedule.js';
import ActionButton from './ActionButton.js';
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
        </Routes>
        <HelpIcon message="Welcome to our sports booking website! You can book fields, matches, or join leagues here." />
      </div>
    </Router>
  );
}

export default App;