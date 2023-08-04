import './Cart.css';
import Photo from '../Photo/Photo';

// const GUINEAPATHS = [
//   "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
//   "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
//   "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
//   "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
// ];

function Cart({ cart, setCart, favorites, setFavorites }) {

  const getSpecial = (s) => {
    const n = s.map(f => f[1]);
    return n;
  }

  const showSpecials = (s) => {
    const favs = getSpecial(favorites);
    return s.map(a => {
      if (favs.includes(a[1])){
        return <Photo hamster={a[0]} source={a[1]} key={a[0]}  cart={cart} setCart={setCart} isRemoval={true} favorites={favorites}  setFavorites={setFavorites} isRemovalC={true}  getSpecial={getSpecial} id={a[0]} /> 
      } else {
        return <Photo hamster={a[0]} source={a[1]} key={a[0]}  cart={cart} setCart={setCart} isRemoval={false} favorites={favorites}  setFavorites={setFavorites} isRemovalC={true} getSpecial={getSpecial} id={a[0]} />
      }
    });
  }

	return (
    <div>
      <h2>My Shopping Cart</h2>
      {showSpecials(cart)}
    </div>
  );
}

export default Cart;
