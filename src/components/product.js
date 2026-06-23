import React from 'react'

export default function Product(props) {
  return (   //here the product used is from productList component where product is passed one by one as props in Product component
    <div className="row">
      <div className="col-6">
        <h2>
          {props.product.name}
          <span className="badge text-bg-secondary">
            {props.product.price}
          </span>
        </h2>
      </div>
    </div>
  );
}
