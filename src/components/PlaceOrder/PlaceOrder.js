import React from 'react';
import img from "../../images/giphy.gif"

const PlaceOrder = () => {
    return (
        <div style={{margin:"auto",width:"400px"}}>
            <h1>Your order in placed .. Hiho</h1>
            <img src={img} alt="" style={{width:"400px"}} />
        </div>
    );
};

export default PlaceOrder;