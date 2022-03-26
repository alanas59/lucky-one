import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] =useState([]);
    const [chooseItem,setChooseItem] = useState("");

    useEffect(()=>{
         fetch('products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
    },[]);
   

    const addToCart = product =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }

    const chooseOne = () =>{
        const num = Math.ceil(Math.random() * 4);
        setChooseItem(cart[num-1].name);
     }

    const chooseAgain = () =>{
       setChooseItem("");
       setCart([]);
    }
   
    return (
        <div className='shop-container'>
         {/*    product section */}
            <div className="products-container">
               {
                 products.map(product => <Product 
                    key = {product.id}
                    product = {product}
                    addToCart = {addToCart}
                    ></Product>)
               } 
            </div>

           {/*  cart section */}
            <div className="cart-container">
                <h2>Selected Products</h2>
                {
                  cart.map(cartItem => <li key = {cartItem.code}>{cartItem.name}</li>)
                }
                <h4>{chooseItem}</h4>
                <button onClick={chooseOne}
                className='choose-btn'
                >Choose one for me</button>
                <button onClick={chooseAgain}
                className='choose-btn'
                >Choose again</button>
            </div>
        </div>
    );
};

export default Shop;