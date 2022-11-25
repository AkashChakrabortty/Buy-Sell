import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const userInfo = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [role,setRole] = useState('');
    const provider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
      };
      const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };
    
      const logout = () => {
        return signOut(auth);
      };
      const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };

      const updateUser = (displayName, photoURL) => {
        updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: photoURL,
        })
          .then(() => {})
          .catch((error) => {
            const errorMessage = error.message;
            alert( 'auth', errorMessage);
          });
      };
     
      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // console.log(user);
            // const uid = user.uid;
            setUser(user);
          } else {
            // console.log("else onAuthStateChanged");
            setUser();
          }
        });
      }, []);


      const authInfo = {
        googleSignIn,
        user,
        logout,
        createUser,
        updateUser,
        role,
        setRole,
        login
      };
    return (
        <div>
            <userInfo.Provider value={authInfo}>{children}</userInfo.Provider>
        </div>
    );
};

export default AuthProvider;