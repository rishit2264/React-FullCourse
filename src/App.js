import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import React from 'react'


function App() {
  return (
    <>
      <Navbar/>
      <ProductList/>
      <Footer/>
    </>
  );
}

export default App;
