import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="signIn-Register-form">
                   <div>
                <form action="">
                    <h1>Please Register</h1>
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
                <p>Already Registered?
                    <Link to="/signIn">Sign In</Link>
                </p>

                <div><h4>-- or----</h4></div>

                <button className="btn-regular">SignIn with Google</button>
             
            </div>
        </div>
    );
};

export default Register;