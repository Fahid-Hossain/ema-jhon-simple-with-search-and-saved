import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
// import useFirebase from '../../hooks/useFirebase/useFirebase';
import "./SignIn.css"

const SignIn = () => {
    const {googleSignIn}=useAuth();
    return (
        <div className="signIn-Register-form">
            <div>
                <form action="">
                    <h1>Please Sign In</h1>
                    <div>
                        <input type="email" placeholder="Enter your email" required />
                    </div> 
                    <br />
                    <div>
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                    <br />
             
                    <div>
                        <input type="submit" value="Submit" className="btn-regular" />
                    </div>
                </form>
                <p>New to ema-john?
                    <Link to="/register">Create Account</Link>
                </p>

                <div><h4>-- or----</h4></div>

                <button onClick={googleSignIn} className="btn-regular">SignIn with Google</button>
             
            </div>
        </div>
    );
};

export default SignIn;