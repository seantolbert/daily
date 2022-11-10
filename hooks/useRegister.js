import { Auth, db } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

export const useRegister = () => {
  const [signUpError, setSignUpError] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const signup = async (email, password, displayName, themeColor) => {
    try {
      const res = await createUserWithEmailAndPassword(Auth, email, password);
      await updateProfile(res.user, { displayName }).catch((err) =>
        console.log(err.message)
      );
      const ref = doc(db, "users", res.user.uid);
      await setDoc(ref, { themeColor });
      console.log("username: ", res.user.displayName);
    } catch (err) {
      setSignUpError(err.message);
      console.log(err.message);
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(Auth, email, password);
    } catch (err) {
      setLoginError(err.message);
      console.log(err.message);
    }
  };

  return { signup, signUpError, login, loginError };
};
