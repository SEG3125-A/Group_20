import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from './master_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFutbol, faTrophy, faCalendar } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-top" />
                    PICKUP.NET
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/">
                                <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/sports">
                                <FontAwesomeIcon icon={faFutbol} style={{ marginRight: '5px' }} />Sports
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/leagues">
                                <FontAwesomeIcon icon={faTrophy} style={{ marginRight: '5px' }} />Leagues
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/master-schedule">
                                <FontAwesomeIcon icon={faCalendar} style={{ marginRight: '5px' }} />Master Schedule
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;