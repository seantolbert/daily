import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";

const EmojiPicker = ({ icon, setIcon }) => {
  return (
    <View style={styles.container}>
      <Text style={gStyles.subtitle}>icon</Text>
      <Text style={{ fontSize: 50 }}>{icon}</Text>
    </View>
  );
};
export default EmojiPicker;
const styles = StyleSheet.create({
  container: {
    width: "45%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
