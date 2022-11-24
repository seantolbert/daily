import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Goal = ({ goal, nav }) => {
  return (
    <View style={styles.container}>
      <Text style={gStyles.subtitle}>{goal.title}</Text>
      <MaterialCommunityIcons name="discord" color="#fff" size={30} />
      <Text style={{ color: "#fff" }}>{goal.daily}</Text>
      <Text style={{ color: "#fff" }}>{goal.weekly}</Text>
      <Text style={{ color: "#fff" }}>{goal}</Text>
    </View>
  );
};
export default Goal;
const styles = StyleSheet.create({
  container: {
    // height: "100%",
  },
});
