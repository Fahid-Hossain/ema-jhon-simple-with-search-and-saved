import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    // useState for all products
    const [products] = useProducts();
    // useState for Cart 
    const [cart, setCart] = useCart(products);

       // onclick handler for remove specific item 
       const removeHandler =(key)=> {
            // console.log("clicked");
            // remove clicked item from ui
            const newItem = cart.filter(product=>product.key !== key);
            setCart(newItem);

            // remove clicked item from localStorage
            removeFromDb(key);
       }

       // placeOrderHandler onclick for order done
       const history = useHistory();
       const placeOrderHandler = ()=>{
            // console.log("clicked")
            // component for place order feedback
            history.push("/shipping")
            //clear order from ui 
            // setCart([]);
            // clear order from localStorage
            // clearTheCart();
       }

    return (
        <div className="shop-container">
            <div className="product-container">
                   {
                       cart.map(product=><ReviewItem
                         product={product}
                         removeHandler={removeHandler}
                         key={product.key}
                         ></ReviewItem>)
                   }

            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={placeOrderHandler} className="btn-regular">Proceed to Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;