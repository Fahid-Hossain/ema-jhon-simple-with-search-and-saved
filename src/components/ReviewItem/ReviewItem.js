import React from 'react';

const ReviewItem = (props) => {
    // console.log(props.product);
    const {name,price,key}=props.product;

    // click handler 
    const removeHandler= props.removeHandler;
 
    return (
        <div className="product">
          <div>
          <h3 className="product-name">{name}</h3>
            <h4>Price: {price}</h4>
            <button onClick={()=>removeHandler(key)} className="btn-regular">Remove</button>
          </div>
        </div>
    );
};

export default ReviewItem;