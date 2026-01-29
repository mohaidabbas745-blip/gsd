import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import Cart from './Pages/Cart';
import Products from './components/Products';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Products/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signupPage' element={<SignupPage />} />
        <Route path='/loginPage' element={<LoginPage />} />
        <Route path='/cart' element={<Cart/>}/>
   
      </Routes>

      <Footer />
    </>
  );
};

export default App;
