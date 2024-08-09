import React from 'react';
import './Button.css';

const Button = ({ bName, onClick }) => {
    return (
        <div className='Sign-login'>
            <button className="signup-btn" onClick={onClick}>{bName}</button>
        </div>
    );
}

export default Button;
