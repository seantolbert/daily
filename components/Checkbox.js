import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { gStyles } from "../styles/global";

const Checkbox = ({ bool, change }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => change(!bool)}>
        {bool ? (
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
    </View>
  );
};
export default Checkbox;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
