import Route from './Route/Route.js';
import { createContext, useState } from 'react';

import './index.js';


export const Context = createContext({
  quantity: 0,
  addToCart: () => { }
})

function App() {

  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    setQuantity(prevQunatity => prevQunatity + 1);
  }

  return (
    <Context.Provider value={{ quantity, addToCart }}>
      <Route />
    </Context.Provider>
  )
}

export default App;
