import React from 'react';
import { useState } from 'react';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';

const OrderReview = () => {
    // useState for all products
    const [products, setProducts] = useProducts();
    // useState for Cart 
    const [cart, setCart] = useCart(products)
    return (
        <div className="shop-container">
            <div className="product-container">
            <h2>This is Order Review {products.length}</h2>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;