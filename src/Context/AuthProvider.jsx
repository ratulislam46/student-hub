import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.config'
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true);

    // Create a new accout by new email 
    const SignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login account which email have already an account 
    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // create or login with google 
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    // update user profile info 
    const updateUserProfile = (profileInfo) => {
        return updateProfile(auth.currentUser, profileInfo)
    }

    const authInfo = {
        SignUp,
        SignIn,
        googleSignIn,
        updateUserProfile,
        user,
        setUser,
        loading
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;