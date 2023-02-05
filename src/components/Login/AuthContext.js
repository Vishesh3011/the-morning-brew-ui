import React, { useContext, useEffect, useState } from 'react'
import { auth, db } from '../../firebase';


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
        // .then(cred => {
        //     return db.collection('users').doc(cred.user.uid).set({
        //         uid: cred.user.id,
        //         email: cred.user.email,
        //     });
        // });
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout(){
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;      
    }, [])

    

    const value = {
        currentUser,
        signup,
        login,
        logout
    }
  return (
    <AuthContext.Provider value = {value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}