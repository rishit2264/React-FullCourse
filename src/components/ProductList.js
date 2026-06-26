import React from 'react'
import Product from './product'

export default function ProductList(props) {   //we can either access props ie values passed in app.js by using directly {prop name} or by passing 'props'.
    
  return (
    props.productList.length > 0 ?
    props.productList.map((product,i) =>{
            return <Product product = {product}  key = {i}   incrementQuantity = {props.incrementQuantity}  decrementQuantity = {props.decrementQuantity} removeItem = {props.removeItem} index = {i} />   
    })
    : <h2> Please add products </h2>
  )
}
//here all the products are going as props in product component one by one.