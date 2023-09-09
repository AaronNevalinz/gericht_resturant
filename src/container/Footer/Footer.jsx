import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
    <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>Aboke town council, kole district</p>
          <p className='p__opensans'>+256-777306662</p>
          <p className='p__opensans'>+256-755004133</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt="" />
          <p className='p__opensans'>The best way to find yourself is to lose yourself in service of others</p>
          <img src={images.spoon} className='spoon__img' style={{marginTop:'15px'}} alt="" />
          <div className='app__footer-links_icons'>
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>
          </div>
        </div>
        <div className='app__footer-links_work'>
            <h1 className='app__footer-headtext'>Working Hours</h1>
            <p className='p__opensans'>Mon - Fri</p>
            <p className='p__opensans'>08:00am - 12:00am</p>
            <p className='p__opensans'>Sat - Sun</p>
            <p className='p__opensans'>07:00am - 11:00pm</p>
        </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 gericht. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
