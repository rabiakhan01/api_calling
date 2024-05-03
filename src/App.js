import Route from './Route/Route.js';
import { useState } from 'react';

import './index.js';



function App() {

  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    setQuantity(prevQunatity => prevQunatity + 1);
  }

  return (
    <Route
      quantity={quantity}
      addToCart={addToCart}
    />
  )
}

export default App;
