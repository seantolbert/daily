import { StyleSheet, Pressable, View } from "react-native";
const AddActColorPicker = ({ setColor }) => {
  const palette = [
    "01BEFE",
    "FFDD00",
    "FF7D00",
    "FF006D",
    "ADFF02",
    "8F00FF",
    "fff",
  ];
  return (
    <View style={styles.container}>
      {palette.map((c, idx) => (
        <Pressable
          key={idx}
          onPress={() => setColor(c)}
          style={[styles.colorDot, { backgroundColor: `#${c}` }]}
        ></Pressable>
      ))}
    </View>
  );
};
export default AddActColorPicker;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  colorDot: {
    width: 30,
    height: 30,
    borderRadius: "50%",
  },
});
