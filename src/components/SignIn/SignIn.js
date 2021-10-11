import React from 'react';
import { Link,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
// import useFirebase from '../../hooks/useFirebase/useFirebase';
import "./SignIn.css"

const SignIn = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log(location.state?.from);
    const redirect_url = location.state?.from || "/shop";
    // googleSignInHandler
    const googleSignInHandler = ()=>{
        googleSignIn()
        .then(result=>{
            history.push(redirect_url);
        })
        
    }
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

                <button onClick={googleSignInHandler} className="btn-regular">SignIn with Google</button>

            </div>
        </div>
    );

};

export default SignIn;