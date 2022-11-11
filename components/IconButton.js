import { StyleSheet, Pressable } from "react-native";
const IconButton = ({ children, setSelected, selected }) => {
  return (
    <Pressable
      onPress={() => setSelected(!selected)}
      style={[styles.button, { borderWidth: selected ? 1 : 0 }]}
    >
      {children}
    </Pressable>
  );
};
export default IconButton;
const styles = StyleSheet.create({
  button: {
    borderColor: "#fff",
    borderRadius: "50%",
    padding: 5,
  },
});
