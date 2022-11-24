import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const userInfo = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const provider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
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
            alert("something wrong");
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
        updateUser
      };
    return (
        <div>
            <userInfo.Provider value={authInfo}>{children}</userInfo.Provider>
        </div>
    );
};

export default AuthProvider;