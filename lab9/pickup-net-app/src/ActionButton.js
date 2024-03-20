import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function ActionButton() {
  return (
    <div>
        <Link className="btn btn-primary" to="/sports">
            PLAY WITH US
        </Link>
    </div>
  );
}

export default ActionButton;