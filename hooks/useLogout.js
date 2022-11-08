import { useAuthContext } from "./useAuthContext";
import { Auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    signOut(Auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => console.log(err.message));
  };

  return { logout };
};
