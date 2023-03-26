import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';

export const authContext = createContext();


export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context
}

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)
    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const login = async (email, password) => { 
    await signInWithEmailAndPassword(auth, email, password);    
    }
    
    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setloading(false)
        })
    }, []);

    return (
        <authContext.Provider value={{ signup, login, user, logout, loading }}>
            {children}
        </authContext.Provider>
    )
}