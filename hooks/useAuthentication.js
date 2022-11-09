import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useState, useEffect } from "react";

const auth = getAuth();

export function useAuthentication() {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return { user };
}
