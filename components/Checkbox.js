import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { gStyles } from "../styles/global";

const Checkbox = ({ daily, setDaily }) => {
  return (
    // <View style={styles.container}>
    <Pressable style={styles.button} onPress={() => setDaily(!daily)}>
      <Text style={gStyles.subtitle}>Daily</Text>
      {daily ? (
        <MaterialCommunityIcons
          name="checkbox-multiple-marked"
          size={35}
          color="white"
        />
      ) : (
        <MaterialCommunityIcons
          name="checkbox-multiple-blank-outline"
          size={35}
          color="white"
        />
      )}
    </Pressable>
    // </View>
  );
};
export default Checkbox;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    marginVertical: 10,
    alignItems: "center",
    width: "95%",
    justifyContent: "flex-end",
  },
  button: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "35%",
    flexDirection: "row",
  },
});
