import React from 'react';
import { useState } from 'react';
import './index.js';
import ShoppingListing from './pages/ShoppingListing/index.js';
import Cart from './pages/Cart/index.js';
import Layout from './utils/Layout/index.js';



function App() {

  const [cartArray, setCartArray] = useState([]);
  const [cartItemQuantity, setCartItemQuantity] = useState(0);
  //update the total bill for all the products in the cart
  const [totalBil, setTotalBil] = useState(0);

  return (

    <Layout
      cartArray={cartArray}
    >
      <ShoppingListing
        cartArray={cartArray}
        setCartArray={setCartArray}
        setCartItemQuantity={setCartItemQuantity}
        setTotalBil={setTotalBil}

      />
      <Cart
        cartArray={cartArray}
        setCartArray={setCartArray}
        cartItemQuantity={cartItemQuantity}
        totalBil={totalBil}
        setTotalBil={setTotalBil}
      />
    </Layout>

  )
}

export default App;
