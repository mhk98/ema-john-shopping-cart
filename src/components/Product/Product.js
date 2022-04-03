import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const {img, name, price, seller, ratings} = product;
   
    return (
        <div className='product'>
            <img src={img}></img>
            <div className='product-info'>
            <p>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={ () => handleAddToCart(product)} className='btn-cart'>
            <p className='btn-text'>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;