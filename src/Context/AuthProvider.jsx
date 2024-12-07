import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading , setLoading] = useState(true)
      const googleProvider = new GoogleAuthProvider()
      const googleLogin = () => {
            return signInWithPopup(auth, googleProvider)
      }
      useEffect(() => {
            const unSubscrive = onAuthStateChanged(auth, (curentUser) => {
                  setUser(curentUser)
                  setLoading(false)
                  
                  
            })
            return () => {
                  unSubscrive()
            }
      }, [])
      const logOut = () =>{
          return signOut(auth)
      }
      const emailRegister = (email,password) => {
           return  createUserWithEmailAndPassword(auth,email,password)
      }
      const updateUserProfile = (info) => {
            return updateProfile(auth.currentUser,info)
      } 
      const emailLogin = (email,password) => {
          return   signInWithEmailAndPassword(auth,email,password)
      }
      const forgetPassword = (email)  => {
            return sendPasswordResetEmail(auth , email)
      }
      const authInfo = {
            googleLogin,
            user,
            setUser,
            logOut,
            emailRegister,
            updateUserProfile,
            loading,
            setLoading,
            emailLogin,
            forgetPassword,
      }
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;