import React from 'react'

export default function Product(props) {
  return (   //here the product used is from productList component where product is passed one by one as props in Product component
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name}    {/* This line displays a product name*/}
          <span className="badge text-bg-secondary">
            {props.product.price}   {/* This line displays the price in a box format(span)*/}
          </span>
        </h2>
      </div>
      <div className = 'col-3'>
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" className="btn btn-danger" onClick={() => {props.decrementQuantity(props.index)}}>-</button>   {/* This is a button which looks like -  quantity  + */}
        <button type="button" className="btn btn-warning">{props.product.quantity}</button>
        <button type="button" className="btn btn-success"   onClick = {() => {props.incrementQuantity(props.index)}}>+</button>   {/* In react we cannot call function during an event ie.-click, so we use empty arrow function so it only passes not calls.*/}
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>
    </div>
  );
}
