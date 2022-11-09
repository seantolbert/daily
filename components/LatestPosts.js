import { StyleSheet, Text, View } from "react-native";
import { useCollection } from "../hooks/useCollection";

import { deleteDoc, doc } from "firebase/firestore";
import { Auth, db } from "../firebase/config";

import Act from "./Act";

const LatestPosts = ({ actCount, limited }) => {
  const user = Auth.currentUser;
  const { documents: acts } = useCollection("activities");

  const handleDelete = async (id) => {
    const docRef = doc(db, "activities", id);
    await deleteDoc(docRef);
  };

  const { container } = styles;

  return (
    <View style={container}>
      <Text>Latest</Text>
      {acts &&
        acts
          .filter((act) => act.uid === user.uid)
          .sort((a, b) => Number(b.time) - Number(a.time))
          .map((act, idx) => (
            <Act key={idx} act={act} handleDelete={handleDelete} />
          ))}
    </View>
  );
};
export default LatestPosts;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
});
