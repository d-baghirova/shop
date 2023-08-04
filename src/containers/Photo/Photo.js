import './Photo.css';

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as love } from '@fortawesome/free-solid-svg-icons';
import { faHeart as loved } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping as cartS } from '@fortawesome/free-solid-svg-icons';

function Photo({hamster, source, favorites,  setFavorites, isRemoval, cart, setCart, isRemovalC }) {

  const addFavs = () => {
    setFavorites([...favorites, [hamster, source]]);
  }
  
  const toCart = () => {
    setCart([...cart, [hamster, source]]);
}

  const removeFavs = () => {
    const n = favorites.filter(h => h[0] !== hamster && h[1] !== source);
    setFavorites(n);
  }

  const fromCart = () => {
    const n = cart.filter(h => h[0] !== hamster && h[1] !== source);
    setCart(n);
  }

  const renderAction = () => {
    if (isRemoval && isRemovalC){
      return <div>
          <img src={source} id={hamster} />
          <button onClick={removeFavs}><FontAwesomeIcon icon={ love } /></button>
          <button onClick={fromCart}><FontAwesomeIcon style={{color: 'black'}} icon={cartS} /></button>
        </div>
    } else if (!isRemoval && isRemovalC) {
      return <div>
          <img src={source} id={hamster} />
          <button onClick={addFavs}><FontAwesomeIcon icon={ loved } /></button>
          <button onClick={fromCart}><FontAwesomeIcon style={{color: 'black'}} icon={cartS} /></button>
        </div>
    } else if (isRemoval && !isRemovalC) {
      return <div>
          <img src={source} id={hamster} />
          <button onClick={removeFavs}><FontAwesomeIcon icon={ love } /></button>
          <button onClick={toCart}><FontAwesomeIcon style={{color: 'grey'}} icon={cartS} /></button>
        </div>
    } else if (!isRemoval && !isRemovalC) {
      return <div>
          <img src={source} id={hamster} />
          <button onClick={addFavs}><FontAwesomeIcon icon={ loved } /></button>
          <button onClick={toCart}><FontAwesomeIcon style={{color: 'grey'}} icon={cartS} /></button>
        </div>
    }
  }

	return (
    <>
    {renderAction()}
    </>
  );
}

export default Photo;
