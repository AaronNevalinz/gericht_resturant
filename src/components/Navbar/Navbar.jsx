import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
      <nav className='app__navbar'>

        <div className="app__navbar-logo">
          <img src={images.gericht} alt="logo img" />
        </div>


        <ul className="app__navbar-links">
          <li className='p__opensans'><a href="#home">Home</a></li>
          <li className='p__opensans'><a href="#pages">Pages</a></li>
          <li className='p__opensans'><a href="#contact">Contact Us</a></li>
          <li className='p__opensans'><a href="#blog">Blog</a></li>
          <li className='p__opensans'><a href="#landing">Landing</a></li>
        </ul>
        
        <div className='app__navbar-login'>
          <a href="/" id='#login' className='p__opensans'>Login / Register</a>
          <div/>
          <a href="/" className='p__opensans'>Book table</a> 
        </div>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)} className='overlay__menu'/>
            {
              toggleMenu && (
                <div className='app__navbar-smallscreen-overlay flex__center slide-bottom'>
                    <MdOutlineRestaurantMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(false)} className='overlay__close'/>
                    <ul className="app__navbar-smallscreen-links">
                      <li className='p__opensans'><a href="#home">Home</a></li>
                      <li className='p__opensans'><a href="/">Pages</a></li>
                      <li className='p__opensans'><a href="/">Contact Us</a></li>
                      <li className='p__opensans'><a href="/">Blog</a></li>
                      <li className='p__opensans'><a href="/">Landing</a></li>
                      <li className='p__opensans'><a href="/" id='#login' >Login / Register</a></li>
                      <li className='p__opensans'><a href="/">Book table</a></li>
                    </ul>
                </div>
              )
            }
        </div>
      </nav>
);
}

export default Navbar;

