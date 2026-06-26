import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import React, {useState} from 'react';
import Footer from './components/Footer';
import AddItem from './components/addItem';

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

  //useState is used here because we want to update quantity of product and productList is here.(products is the current state of productList).
  let [products,setproductList] = useState(productList)  //this is a use state , it is used  because if we update a count or state of an element directly 
                                                         //it will not show on UI.by using this it gets seen by react and updates on UI.
  let [totalAmount,settotalAmount] = useState(0)

  const incrementQuantity = (index) =>{          //this is the increment function to increment products used in Product.js  .
    let newproductList = [...products]
    let newAmount = totalAmount 
    newproductList[index].quantity++  
    newAmount += newproductList[index].price
    setproductList(newproductList);
    settotalAmount(newAmount);
  }

  const decrementQuantity = (index) =>{          //this is the decrement function to decrement products used in Product.js  .
    let newproductList = [...products]
    let newAmount = totalAmount
    if (newproductList[index].quantity > 0) {
      newproductList[index].quantity--;
      newAmount -= newproductList[index].price;
      setproductList(newproductList);
      settotalAmount(newAmount);
  }
  }

  const resetQuantity = () => {
    let newProductList = [...products]
    newProductList.map((products) => {
      products.quantity = 0
    })
    setproductList(newProductList);
    settotalAmount(0);
  }

  const removeItem = (index) => {
    let newProductList = [... products];
    let newAmount = totalAmount;
    newAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index,1);
    setproductList(newProductList);
    settotalAmount(newAmount);
  }

  const addItem = (name,price) => {
    let newProductList = [... products];
    newProductList.push({
      name : name,
      price : price,
      quantity : 0
    });
    setproductList(newProductList);
  }

//here we pass the incrementQuantity function (should be arrow function or else not work) to the product component as props because it has the button and event.
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem  addItem = {addItem} />
        <ProductList productList={products} incrementQuantity = {incrementQuantity} decrementQuantity = {decrementQuantity}  removeItem = {removeItem} />      {/*here the productList = products because , products has the updated version of productList due to useState*/}
        <Footer totalAmount = {totalAmount} resetQuantity = {resetQuantity} />
      </main>
    </>
  );
}

export default App;