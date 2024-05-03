import Route from './Route/Route.js';
import { useState } from 'react';
import { handelCart } from './utils/utils.js';
import './index.js';



function App() {

  const [cart, setCart] = useState(handelCart());

  const addToCart = (cartData) => {
    const cartList = [...cart, cartData];
    const setItem = JSON.stringify(cartList);
    localStorage.setItem('cartItems', setItem);
    setCart(cartList);

  }
  const cartLength = handelCart().length;

  return (
    <Route
      addToCart={addToCart}
      cartLength={cartLength}


    />
  )
}

export default App;
