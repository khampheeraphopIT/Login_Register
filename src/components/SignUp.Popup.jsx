import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.Popup.css'

const SignUp = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className='overlay'>
            <div className='SignUp'>
                <div className="head text-center">
                    <h3>Sign Up</h3>
                </div>
                <div className='form'>
                    <input type="text" placeholder='Name' />
                </div>
                <div className='form'>
                    <input type="text" placeholder='LastName' />
                </div>
                <div className='form'>
                    <input type="date" />
                </div>
                <div className='form'>
                    <input type="text" placeholder='Phone' />
                </div>
                <div className='form'>
                    <input type="email" placeholder='E-mail' />
                </div>
                <div className='form'>
                    <input type="password" placeholder='Password' />
                </div>
                <div className='form'>
                    <input type="password" placeholder='Confirm Password' />
                </div>
                <div className='form-button'>
                    <h3 className='btn btn-primary'><Link to="/" onClick={onClose}>Sign Up</Link></h3>
                </div>
                <button className="close" onClick={onClose}>X</button>
            </div>
        </div>
    );
}

export default SignUp;