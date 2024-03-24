import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function ActionButton({ text, to }) {
  return (
    <div>
        <Link className="btn btn-primary" to={to}>
            {text}
        </Link>
    </div>
  );
}

export default ActionButton;