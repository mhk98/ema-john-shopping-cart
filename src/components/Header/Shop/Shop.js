import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct)
        const newCart = [...cart, selectedProduct];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
           <div className='products-container'>
           {
                products.map(product =>

                    <Product 
                    key={product.id}
                    product= {product}
                    handleAddToCart={handleAddToCart}
                    ></Product>
                    
                 )
            }
           </div>

           <div className='cart-container'>
            <h3>Order Summary</h3>

           {
               cart.map(item=>  <Cart item={item}></Cart>)
           }
           </div>

        </div>
    );
};

export default Shop;