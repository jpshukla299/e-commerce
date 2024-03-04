import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Component/Header';
import Shop from './Component/Shop';
import SignUp from './SignUp';
import Home from './Home';
import Cart from './Component/Cart';
// import { createContext } from 'react';
import { useState, createContext } from 'react';
import { useReducer } from 'react';
import cartReducer from './CartReduser';
import Login from './Login';
import { useContext } from 'react';

const MyContext = createContext();

function App() {

  const MyProvider = ({ children }) => {
    // const [cart] = useState([]);
    const [cart, dispatch] = useReducer(cartReducer, { cart: [] });
    let x = cart.cart.length
    // console.log(x)

    return (
      <MyContext.Provider value={{ cart, dispatch }}>
        {children}

      </MyContext.Provider>
    );
  };

  return (
    <div className="App">
      <Router>
        <MyProvider>
          <div>
            <Header/>
            <Routes>
              {/* <Route path="/" element={<Shop />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </MyProvider>
      </Router>
    </div>
  );
}

export default App;
export { MyContext };
