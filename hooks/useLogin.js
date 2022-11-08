import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { Auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(Auth, email, password)
      .then((response) => {
        dispatch({ type: "LOGIN", payload: response.user });
      })
      .catch((err) => setError(err.message));
    console.log("logged in");
  };

  return { login, error };
};
