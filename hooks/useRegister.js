import { Auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useState } from "react";

export const useRegister = () => {
  const [error, setError] = useState(null);

  const signup = async (email, password, displayName, themeColor) => {
    try {
      const res = await createUserWithEmailAndPassword(Auth, email, password);
      await updateProfile(res.user, { displayName }).catch((err) =>
        console.log(err.message)
      );
      const ref = doc(db, "users", res.user.uid);
      await setDoc(ref, {themeColor})
      console.log("username: ", res.user.displayName);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return { signup, error };
};
