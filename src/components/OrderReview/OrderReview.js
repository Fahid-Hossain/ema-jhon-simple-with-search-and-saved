import React from 'react';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    // useState for all products
    const [products, setProducts] = useProducts();
    // useState for Cart 
    const [cart, setCart] = useCart(products);

       // onclick handler for remove specific item 
       const removeHandler =(key)=> {
            // console.log("clicked");
            const newItem = cart.filter(product=>product.key !== key);
            setCart(newItem);
       }
    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>This is Order Review {products.length}</h2>
                   {
                       cart.map(product=><ReviewItem
                         product={product}
                         removeHandler={removeHandler}
                         key={product.key}
                         ></ReviewItem>)
                   }

            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;