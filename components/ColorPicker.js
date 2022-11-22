import { StyleSheet, Text, View, Pressable } from "react-native";
import { gStyles } from "../styles/global";
const ColorPicker = ({ color, setShow, custWidth }) => {
  const colors = ["F47C7C", "F7F48B", "A1DE93", "70A1D7", "fff"];

  return (
    <View style={[styles.container, { width: custWidth ? custWidth : "95%" }]}>
      <Text style={[gStyles.subtitle, { fontSize: 15 }]}>color</Text>
      <Pressable
        onPress={() => setShow(true)}
        style={[styles.colorDot, { backgroundColor: `#${color}` }]}
      ></Pressable>
    </View>
  );
};
export default ColorPicker;
const styles = StyleSheet.create({
  container: {
    width: "95%",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#fff",
    flexDirection: "row",
    height: 50,
  },

  colors: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-evenly",
  },
  colorDot: {
    width: 60,
    height: 30,
    borderRadius: "10px",
  },
});
