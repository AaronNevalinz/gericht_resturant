import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your palatte' /> 
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu'>

      <div className='app__spcialMenu-menu_wine flex__Center'>
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu_menu-items'>
           {
            data.wines.map((wine, indexof)=>(
              <MenuItem key={wine.title + indexof} title={wine.title} tags={wine.tags}  price={wine.price}/>
            ))
           }
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt="" />
      </div>

      <div className='app__spcialMenu-menu_cocktails flex__Center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu-items'>
           {
            data.cocktails.map((cocktail, indexof)=>(
              <MenuItem key={cocktail.title + indexof} title={cocktail.title} tags={cocktail.tags} price={cocktail.price} />
            ))
           }
        </div>
      </div>
      
    </div>

    <div style={{marginTop:'15px'}}>
           <button type='button' className='custom__button'>view more</button>
    </div>
  </div>
);

export default SpecialMenu;
