import React from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = (props) => {
    const {name, price, img} = props.item;
    // let total= 0;
    // let quantity = 0;
    // let shipping = 0;
    
    // for(const product of cart){
    //     total= total + product.price;
    //     quantity = quantity + product.quantity;
    //     shipping = shipping + product.shipping;
       
    // }
  
    // const tax= (total/100)*5;
    // const grandTotal= total+shipping+tax;
    return (
        <div className='product-container'>
            <p>Selected Items: </p>
            {/* <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5> */}
            <img className='w-25 h-25' src={img}></img>
            <div className='product-info'>
            <p>{name}</p>
         <p>{price}</p>
            </div>
            

        </div>
    );
};

export default Cart;