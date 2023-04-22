import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    sendPasswordResetEmail
} from "firebase/auth";

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

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        signOut(auth)
    }

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setloading(false)
        })
        return unsubscribe
    }, []);

    return (
        <authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle, resetPassword }}>
            {children}
        </authContext.Provider>
    )
}