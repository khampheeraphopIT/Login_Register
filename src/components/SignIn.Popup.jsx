import React, { useState } from 'react'
import './SignIn.Popup.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import facebook from '../images/facebook.png'
import google from '../images/google.png'
import SignUp from './SignUp.Popup';

const SignIn = ({ isOpen, onClose }) => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const toggleSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="SignIn">
        <div className='logo'>
        <img src={logo} alt="" />
        </div>
        <div className='form'>
            <input type="Email" placeholder='Email' />
        </div>
        <div className='form'>
            <input type="password" placeholder='password' />
        </div>
        <div className='form-button'>
            <h3 className='btn btn-primary'><Link to="/" onClick={onClose}>Sign In</Link></h3>
            <h3 className='btn btn-primary'><Link to="/" onClick={toggleSignUp}>Sign Up</Link></h3>
        </div>
        <div className='form-icon'>
            <h3 className='facebook'><Link to="/"><img src={facebook} alt="" /></Link></h3>
            <h3 className='google'><Link to="/"><img src={google} alt="" /></Link></h3>
        </div>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
        <SignUp isOpen={isSignUpOpen} onClose={toggleSignUp} />
    </div>
  );
};

export default SignIn;
