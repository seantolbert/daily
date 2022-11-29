import { StyleSheet, Text, View, Pressable } from "react-native";
import { gStyles } from "../styles/global";

const ColorSwitch = ({ color, setShow }) => {
  return (
    <View style={styles.container}>
      <Text style={gStyles.subtitle}>color</Text>
      <Pressable
        onPress={() => setShow(true)}
        style={[styles.colorTile, { backgroundColor: `#${color}` }]}
      ></Pressable>
    </View>
  );
};
export default ColorSwitch;
const styles = StyleSheet.create({
  container: {
    width: "40%",
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  colorTile: {
    width: 40,
    height: 30,

    borderRadius: "10px",
  },
});
