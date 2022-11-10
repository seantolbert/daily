import { StyleSheet, Text, View, Pressable } from "react-native";
const ColorPicker = ({ setThemeColor }) => {
  const colors = ["F47C7C", "F7F48B", "A1DE93", "70A1D7", "fff"];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>theme</Text>
      {colors.map((color, idx) => (
        <Pressable
          key={idx}
          onPress={() => setThemeColor(color)}
          style={[styles.colorDot, { backgroundColor: `#${color}` }]}
        ></Pressable>
      ))}
    </View>
  );
};
export default ColorPicker;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#fff",
    // borderBottomWidth: 2,
    height: 50,
  },
  label: {
    color: "#fff",
    fontSize: 20,
  },
  colorDot: {
    width: 30,
    height: 30,
    borderRadius: "50%",
  },
});
