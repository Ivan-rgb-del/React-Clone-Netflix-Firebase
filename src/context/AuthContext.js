import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../firebase';
import { setDoc, doc } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, 'users', email), {
      savedShows: []
    })
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, signIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  )
};

export const UserAuth = () => {
  return useContext(AuthContext);
};