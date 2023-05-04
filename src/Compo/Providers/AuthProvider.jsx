import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext=createContext(null);
const auth=getAuth(app);
const AuthProvider = ({children}) => {
 const [user,setUser]=useState(null);
 const [load,setLoad]=useState(true);
 
  const createUser=(email,password)=>{
    setLoad(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }
const signIn=(email,password)=>{
  setLoad(true);
  return signInWithEmailAndPassword(auth,email,password);
}

const logOut=()=>{
  setLoad(true)
  return signOut(auth);
}

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
    console.log("logout");
    setUser(loggedUser);
    setLoad(false);
  })
  return ()=>{
    unsubscribe();
  }
},[])

const authInfo=
{
  user,
  load,
  createUser,
  signIn,
  logOut,
  
}

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;