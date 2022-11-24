import { StyleSheet, Text, View } from "react-native";
const Square = () => {
  return <View style={styles.square} />;
};
export default Square;
const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
