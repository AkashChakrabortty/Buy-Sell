import {
    getAuth,
    GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut
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
        logout
      };
    return (
        <div>
            <userInfo.Provider value={authInfo}>{children}</userInfo.Provider>
        </div>
    );
};

export default AuthProvider;