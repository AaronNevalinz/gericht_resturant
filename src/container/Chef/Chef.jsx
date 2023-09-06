import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="Quote" />
          <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae impedit fugit iure praesentium dolorum quod sunt ipsum vero animi odit error itaque, nihil id sint nostrum. Veniam, tenetur voluptate! Obcaecati?</p>
      </div>
      
      <div className='app__chef-sign'>
        <p>Aaron Nevalinz</p>
        <p className='p__opensans'>Chef and founder</p>
        <img src={images.sign} alt="" />
      </div>

    </div>
  </div>
);

export default Chef;
