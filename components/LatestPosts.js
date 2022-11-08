import { StyleSheet, Text, View } from "react-native";
import { useCollection } from "../hooks/useCollection";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

import Act from "./Act";
import { useAuthContext } from "../hooks/useAuthContext";

const LatestPosts = ({ actCount, selected }) => {
  const { user } = useAuthContext();
  const { documents: acts } = useCollection("activities");
  const todayDay = new Date().getDay();


  // console.log(user.email)

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
          .slice(-actCount)
          .sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          })
          .sort((a, b) => {
            return new Date(b.time) - new Date(a.time);
          })
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
