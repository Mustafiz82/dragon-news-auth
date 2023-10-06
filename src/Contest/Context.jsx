import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const authContext = createContext(null)
const auth = getAuth(app);

const Context = ({children}) => {

    const [user  , setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email ,password)
    }

    const signInUser = (email , password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
        
    }


    const logOut = () =>{
        setLoading(true)
        return signOut(auth)

    }




    useEffect(() =>{
        const UnSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log("Auth state Changed " , currentUser);
            setLoading(false)
        })
        return () =>{
            UnSubscribe()
        }


    },[])

    
    const authInfo = {
        user , createUser , logOut , signInUser ,loading
    }

  
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Context;