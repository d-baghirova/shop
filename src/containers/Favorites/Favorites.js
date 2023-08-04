import './Favorites.css';
import Photo from '../Photo/Photo';

function Favorites({ favorites,  setFavorites, cart, setCart }) {

  const getSpecial = (s) => {
    const n = s.map(f => f[1]);
    return n;
  }

  const showSpecials = (s) => {
    const carts = getSpecial(cart);
    return s.map(a => {
      if (carts.includes(a[1])){
        return <Photo hamster={a[0]} source={a[1]} key={a[0]}  cart={cart} setCart={setCart} isRemoval={true} favorites={favorites}  setFavorites={setFavorites} isRemovalC={true}  getSpecial={getSpecial} id={a[0]} /> 
      } else {
        return <Photo hamster={a[0]} source={a[1]} key={a[0]}  cart={cart} setCart={setCart} isRemoval={true} favorites={favorites}  setFavorites={setFavorites} isRemovalC={false} getSpecial={getSpecial} id={a[0]} />
      }
    });
  }

	return (
    <div>
      <h2>Favorite hamsters</h2>
      {showSpecials(favorites)}
    </div>
  );
}

export default Favorites;
