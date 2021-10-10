import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";

import intializeFirebaseAuth from "../../Firebase/firebase.initialize";

const useFirebase = () => {
    //useStates 
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    //initialize firebase auth
    intializeFirebaseAuth();
    //sign in providers
    const googleProvider = new GoogleAuthProvider();
    //get auth for all sign in method
    const auth = getAuth();


    // sign In using google
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    // logOut 
    const logOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
           setError(error);
        });
    }

    // Speacial observer for State Change (onStateChanged)
        useEffect(()=>{
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                    console.log("observer State Change",user);

                }
              });  
        },[])

    return {
        user,
        error,
        googleSignIn,
        logOut
    }

}
export default useFirebase;