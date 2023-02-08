import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CartContainer from './components/Cart/CartContainer';
import Contact from './components/Contact/Contact';
import Desinger from './components/Designer/Desinger';
import Gallery from './components/Gallery/Gallery';
import LandingPage from './components/LandingPage/LandingPage';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotals, } from './Features/Cart/CartSlice';

function App() {

  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/main' element={<Main />} />
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/designer' element={<Desinger />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cartContainer' element={<CartContainer />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
