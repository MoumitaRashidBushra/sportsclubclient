import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();



    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (user, name, photo) => {
        setLoading(true);
        return updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }



    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('log', loggedUser)
            setUser(loggedUser);

            if (loggedUser) {
                axios.post('https://sports-club-server.vercel.app/jwt', { email: loggedUser.email })
                    .then(data => {
                        // console.log(data.data.token)
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
            // setLoading(false);
        })

        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        signIn,
        logout,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;