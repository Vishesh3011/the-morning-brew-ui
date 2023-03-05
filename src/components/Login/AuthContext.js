import React, { useContext, useEffect, useState } from 'react'
import { auth, db } from '../../firebase';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // new state

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
        // .then(cred => {
        //     return db.collection('users').doc(cred.user.uid).set({
        //         uid: cred.user.id,
        //         email: cred.user.email,
        //     });
        // });
    }

    function login(email, password) {
        console.log(auth.signInWithEmailAndPassword(email, password));
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    function requireAuth(nextState, replace) {
        if (!isLoggedIn) {
            replace('/login'); // replace with your login page route
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
            setIsLoggedIn(!!user);
        })
        return unsubscribe;
    }, [])



    const value = {
        currentUser,
        signup,
        login,
        logout,
        requireAuth
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}