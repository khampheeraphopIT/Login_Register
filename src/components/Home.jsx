import React, { useState } from 'react'
import './style.css'
import logo from '../../src/images/logo.png'
import { Link } from 'react-router-dom'
import SignIn from './SignIn.Popup'

function Home() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const toggleSignIn = () => {
    setIsSignInOpen(!isSignInOpen);
  };

  return (
    <>
      <nav>
        <div >
          <div className='nav-con d-flex justify-content-between align-items-center '>
            <div className='logo-home'>
              <img src={logo} alt="" />
            </div>
            <ul className="menu">
              <li><Link to="/">Home</Link></li>  {/*Link คือ แท็ก a */}
              <li><Link to="/">Villas</Link></li>
              <li><Link to="/">Special Offers</Link></li>
              <li><Link to="/">Gallery</Link></li>
              <li><Link to="/">Location</Link></li>
              <li><Link to="/">Contact Us</Link></li>
            </ul>
            <button className='button-btn' onClick={toggleSignIn}>SIGN IN</button>
          </div>
        </div>
      </nav>
      <header className="header">
      <section className="banner">
        <div className='dot'>
        <button className='dot-btn1'></button>
        <button className='dot-btn2'></button>
        <button className='dot-btn3'></button>
        </div>
    </section>
</header>
      <SignIn isOpen={isSignInOpen} onClose={toggleSignIn} />
    </>

  )

}

export default Home