import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from './master_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFutbol, faTrophy, faCalendar } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" width="35" height="35" className="d-inline-block align-top" />
                    PICKUP.NET
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/">
                                <FontAwesomeIcon icon={faHome} />Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/sports">
                                <FontAwesomeIcon icon={faFutbol} />Sports
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/leagues">
                                <FontAwesomeIcon icon={faTrophy} />Leagues
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/master-schedule">
                                <FontAwesomeIcon icon={faCalendar} />Master Schedule
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
