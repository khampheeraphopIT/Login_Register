import React, { useState } from 'react';
import './style.css';
import logo from '../../src/images/logo.jpg';
import { Link } from 'react-router-dom';
import SignIn from './SignIn.Popup';
import { showRoom } from './showRoom';
import Hotel  from '../images/Hotel.jpg';

function Home() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [roomDetails, setRoomDetails] = useState(null);

  const toggleSignIn = () => {
    setIsSignInOpen(!isSignInOpen);
  };

  const handleRoomChange = (event) => {
    const roomType = event.target.value;
    const details = showRoom(roomType);
    setRoomDetails(details);
  };

  return (
    <>
      <nav>
        <div>
          <div className='nav-con d-flex justify-content-between align-items-center'>
            <div className='logo-home'>
              <img src={logo} alt="" />
            </div>
            <ul className="menu">
              <li><Link to="/">Home</Link></li>
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
        <section className="banner"></section>
      </header>
      <SignIn isOpen={isSignInOpen} onClose={toggleSignIn} />
      <div className='SearchRoom'>
        <h1>เลือกห้องที่คุณต้องการ</h1>
        <select id="roomType" onChange={handleRoomChange} defaultValue="">
          <option value="" disabled>เลือกประเภทห้องพักของคุณ</option>
          <option value="single">ห้องเดี่ยว</option>
          <option value="double">ห้องคู่</option>
        </select>
        {roomDetails && (
          <div className="container">
            <div className="Room" id="roomDetails">
              <div className="Details">
                <div className="text">
                  <p>{roomDetails.info}</p>
                  <p>ราคา: {roomDetails.price} บาท</p>
                  </div>
                  <img src={Hotel} alt="" />
                  <button className='button btn-primary'>BookNow</button>
              </div>
              <div className="Details">
              <div className="text">
                  <p>{roomDetails.info}</p>
                  <p>ราคา: {roomDetails.price} บาท</p>
                  </div>
                  <img src={Hotel} alt="" />
                  <button className='button btn-primary'>BookNow</button>
              </div>
              <div className="Details">
              <div className="text">
                  <p>{roomDetails.info}</p>
                  <p>ราคา: {roomDetails.price} บาท</p>
                  </div>
                  <img src={Hotel} alt="" />
                  <button className='button btn-primary'>BookNow</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
