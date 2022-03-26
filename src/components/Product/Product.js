import React from 'react';
import './Product.css';

const Product = (props) => {
    const {product} = props;
    const {name,price,picture} =product;
    console.log(name,price,picture);
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <p>Name:{name}</p>
            <h4>Price:{price}</h4>
            <button className='cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;