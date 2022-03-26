import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {product,addToCart} = props;
    const {name,price,picture} =product;
    
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h2>Name:{name}</h2>
            <h4>Price:{price}</h4>
            <button onClick={()=> addToCart(product)}  className='cart-btn'>
               <p className='btn-text'> Add To Cart </p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
         </div>
    );
};

export default Product;