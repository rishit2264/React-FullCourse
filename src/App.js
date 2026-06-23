import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import React from 'react';

function App() {
  const productList = [
    {
      price: 99999,
      name: "iPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList productList={productList} />
      </main>
    </>
  );
}

export default App;