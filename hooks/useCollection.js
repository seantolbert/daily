import { useState, useEffect, useRef } from "react";
import { Auth, db } from "../firebase/config";

// firebase imports
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);

  //   set up the query
  // const q = useRef(_q).current;

  useEffect(() => {
    let ref = query(
      collection(db, c),
      where("uid", "==", Auth.currentUser.uid)
    );

    // if (q) {
    //   ref = query(ref, orderBy("-date"));
    // }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [c]);

  return { documents };
};
