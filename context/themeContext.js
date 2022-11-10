// import { doc, getDoc } from "firebase/firestore";
// import { Auth, db } from "../firebase/config";
// import { useState } from "react";

// export const themeContext = async () => {
//   const [themeError, setThemeError] = useState();
//   try {
//     const docRef = doc(db, "users", Auth.currentUser.uid);
//     const themeColor = res.data().themeColor;

//     if (res.exists()) {
//       return themeColor
//     } else {
//         console.log('nope')
//     }

//     console.log(themeColor);
//   } catch (err) {
//     console.log(err);
//     setThemeError(err.message);
//   }
//   return;
// };
