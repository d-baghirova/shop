import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Favorites from "../Favorites/Favorites";
import Cart from "../Cart/Cart";

const NavBar = () => {
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);
    const [GUINEAPATHS, setGUINEAPATHS] = useState([
        "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
        "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
        "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
        "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
    ]);

    // const getSpecial = (s) => {
    //     const n = s.map(f => f[1]);
    //     return n;
    // }

    return (
        <div>
            <Link className={useLocation().pathname == '/' ? 'here' : 'not'} to='/'>PhotoGallery</Link>
            <Link className={useLocation().pathname == '/favorites' ? 'here' : 'not'} to='/favorites'>Favorite</Link>
            <Link className={useLocation().pathname == '/cart' ? 'here' : 'not'} to='/cart'>Cart</Link>
            <Routes>
                <Route exact path="/" element={<PhotoGallery favorites={favorites}  setFavorites={setFavorites} cart={cart} setCart={setCart} GUINEAPATHS={GUINEAPATHS} />}></Route>
                <Route exact path="/favorites" element={<Favorites favorites={favorites}  setFavorites={setFavorites} cart={cart} setCart={setCart} />}></Route>
                <Route exact path="/cart" element={<Cart favorites={favorites}  setFavorites={setFavorites} cart={cart} setCart={setCart} />}></Route>
            </Routes>
        </div>
    )
}

export default NavBar;