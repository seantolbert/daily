import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

import { Auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(Auth, email, password)
      .then((response) => dispatch({ type: "LOGIN", payload: response.user }))
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
    console.log("signedUp");
  };

  return { error, signup };
};
