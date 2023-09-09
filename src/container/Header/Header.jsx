import React from 'react';
import images from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <header className='app__header app__wrapper section__padding' id='home'>

    <div className="app__wrapper_info">
      <SubHeading title='Chase the new flavour'/>
      <h1 className='app__header-h1'>The Key to fine dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad est facilis, cumque illo tenetur reprehenderit repellendus! Dolores reprehenderit nesciunt eos autem quae eligendi necessitatibus, facilis consequatur! Ut voluptatum eaque laborum?</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header__img" />
    </div>
  
  </header>
);

export default Header;
