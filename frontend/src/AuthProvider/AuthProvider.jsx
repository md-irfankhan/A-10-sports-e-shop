import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState();
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            setUser(user);
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
    },[])
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(displayName,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName,photoURL
        })
    }
    const logOut=()=>{
        return signOut(auth);
    }
    const value={
        createUser,
        loginUser,
        updateUser,
        loading,
        setLoading,
        logOut,
        user

    }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export const useAuth=()=>{
    return useContext(AuthContext)
}

export default AuthProvider;
