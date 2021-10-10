import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
// import useFirebase from '../../hooks/useFirebase/useFirebase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orderReview">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                    <span style={{color:"white"}}><small>{user.displayName}</small> </span>
                
                
                {
                    user.email ? <button onClick={logOut}>Log Out</button> :
                    <NavLink to="/signIn">Sign In</NavLink>
                }
                {/* <NavLink to="/register">Register</NavLink> */}
            </nav>
        </div>
    );
};

export default Header;