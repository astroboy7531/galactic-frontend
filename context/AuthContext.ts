import { useContext, useEffect, createContext, useState } from "react";
// import {
//     GoogleAuthProvider,
//     signInWithPopup,
//     signInWithRedirect,
//     signOut,
//     onAuthStateChanged
// } from 'firebase/auth'

import { User } from "firebase/auth";
export const AuthContext = createContext({
    googleSignIn: () => {},
    logOut: () => {},
    delUser: (user:User) => {},
    signIn: (email:string, password:string) =>  null as any ,
    updatePass: (user:User, password:string) => {},
    user: null as User | null,
    isAuthLoading: true
});

