import { StyleSheet, View, Text, Pressable } from "react-native";
import { gStyles } from "../styles/global";
const IconButton = ({ selected, setSelected, title }) => {
  return (
    <Pressable style={styles.container} onPress={() => setSelected(title)}>
      <Text style={{ color: selected ? "#fff" : "#828282" }}>{title}</Text>
    </Pressable>
  );
};
export default IconButton;
const styles = StyleSheet.create({
});
