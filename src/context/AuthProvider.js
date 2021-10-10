import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase/useFirebase';
// create auth context
 export const AuthContext = createContext();

const AuthProvider = (props) => {
    const { children } = props;
    // useFirebase 
    const allContext = useFirebase();
    return (

        //create context provider
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;