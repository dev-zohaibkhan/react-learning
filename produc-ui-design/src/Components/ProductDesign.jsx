import React from 'react'
import './ProductDesign.css'

const ProductDesign = (props) => {
  return (
    <div className="product">
      <div className="img">
        <img src={props.productLogo} alt="" />
      </div>
      <div className="content">
        <span className="productName">{props.productName}</span>
        <h3 className="productType">{props.productType}</h3>
        <span className="productPrice">{props.productPrice}</span>
      </div>
    </div>
  )
}

export default ProductDesign
