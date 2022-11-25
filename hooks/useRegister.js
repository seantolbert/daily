import { Auth, db } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

export const useRegister = () => {
  const [signUpError, setSignUpError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [resetPassError, setResetPassError] = useState("");

  

  const signup = async (email, password, displayName, themeColor) => {
    try {
      const res = await createUserWithEmailAndPassword(Auth, email, password);
      await updateProfile(res.user, { displayName }).catch((err) =>
        console.log(err.message)
      );
      // await sendEmailVerification(res.user);
      const ref = doc(db, "users", res.user.uid);
      await setDoc(ref, { themeColor, uid: res.user.uid });
      console.log("username: ", res.user.displayName);
    } catch (err) {
      setSignUpError(err);
      console.log(err.message);
    }
  };

  const login = async (email, password) => {
    // try {
    await signInWithEmailAndPassword(Auth, email, password).catch((err) => {
      setLoginError(err.message);
      console.log(err.message);
    });
    // } catch (err) {
    // setLoginError(err.message);
    // console.log(err.message);
    // }
  };

  const resetPassword = async (email) => {
    await sendPasswordResetEmail(Auth, email).catch((err) => {
      console.log(err.message);
      setResetPassError(err.message);
    });
  };

  return {
    signup,
    signUpError,
    login,
    loginError,
    resetPassword,
    resetPassError,
  };
};
