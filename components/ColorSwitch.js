import { setISODay } from "date-fns";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { gStyles } from "../styles/global";

const ColorSwitch = ({ color, setShow, setIsColor, show }) => {
  return (
    <View style={styles.container}>
      <Text style={gStyles.subtitle}>color</Text>
      <Pressable
        onPress={() => {
          setIsColor(true)
          setShow(!show);
        }}
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
