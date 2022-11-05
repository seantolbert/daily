import { StyleSheet, Text, SafeAreaView, Pressable, View } from "react-native";
import { HomeButton, BackButton } from "../components";
import { Feather } from "@expo/vector-icons";

import { deleteDoc, doc } from "firebase/firestore";

import { useCollection } from "../hooks/useCollection";
import { db } from "../firebase/config";

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
      <Text>AllActivity</Text>
      {acts &&
        acts.map((act) => (
          <View key={act.id} style={{ flexDirection: "row", alignItems: "center" }}>
            <Text  style={{ paddingRight: 10 }}>
              {act.text}
            </Text>
            <Pressable onPress={() => handleDelete(act.id)}>
              <Feather name="delete" size={24} color="black" />
            </Pressable>
          </View>
        ))}
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
  },
});
