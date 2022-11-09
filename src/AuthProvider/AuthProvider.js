import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const userRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () =>{
        return signOut(auth)
    }

    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    }, [])

    const authInfo = {user, userRegister, userLogIn, userLogOut, googleLogIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;