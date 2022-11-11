import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
const AddGoal = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={gStyles.subtitle}>Add Goal</Text>
    </SafeAreaView>
  );
};
export default AddGoal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
