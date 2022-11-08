import {
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import { HomeButton, BackButton, Act, LatestPosts } from "../components";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

import { useCollection } from "../hooks/useCollection";

const AllActivity = ({ navigation }) => {
  const { documents: acts } = useCollection("activities");

  const handleDelete = async (id) => {
    const docRef = doc(db, "activities", id);
    await deleteDoc(docRef);
  };

  const { container } = styles;

  return (
    <SafeAreaView style={container}>
      <BackButton nav={navigation} />
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <Text>AllActivity</Text>
        <LatestPosts />
      </ScrollView>
      <HomeButton nav={navigation} />
    </SafeAreaView>
  );
};
export default AllActivity;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
});
