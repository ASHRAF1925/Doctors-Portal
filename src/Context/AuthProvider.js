import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.cofig'

export const AuthContext=createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {


    const[user,setUser]=useState(null);
    const[loading,setloading]=useState(true);


    //create user with email and password start
    const createUser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //create user with email and password end

    //sign in with email and password start
    const signIn=(email,password)=>{
        setloading(true);
       return signInWithEmailAndPassword(auth,email,password)
    }
    //sign in with email and password end


    //observer start
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setloading(false);
        });
        return ()=> unsubscribe();
    },[])
    //observer end


    //sign out start
    const logOut=()=>{
        setloading(true);
        return signOut(auth);
    }
    //sign out end

    //updateUser start
    const updateUser=(userInfo)=>{
        return updateProfile(user,userInfo)


    }
    //updateUser end

    //  loading state start
    //  loading state end


    const authInfo={
        createUser,
        signIn,
        logOut,
        user,
        updateUser,
        loading,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;