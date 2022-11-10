import { doc, getDoc } from "firebase/firestore";
import { Auth, db } from "../firebase/config";

export const themeContext = () => {
  const userTheme = async () => {
    const docRef = doc(db, "users", 'wSRaX8R8fMVxnQsfUcCgTtSZVAH3');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("user theme: ", docSnap.data.themeColor);
    } else {
      console.log("nuthin there bro");
    }
  };
  return userTheme;
};
