import React from 'react'
import Product from './product'

export default function ProductList(props) {   //we can either access props ie values passed in app.js by using directly {prop name} or by passing 'props'.
    
  return (
    props.productList.map((product,i) =>{
            return <Product product = {product}  key = {i}/>   
    })
  )
}
//here all the products are going as props in product component one by one.