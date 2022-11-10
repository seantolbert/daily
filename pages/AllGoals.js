import { StyleSheet, Text, View } from "react-native";
const AllGoals = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>AllGoals</Text>
    </View>
  );
};
export default AllGoals;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
});
