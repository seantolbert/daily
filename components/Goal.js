import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Goal = ({ goal }) => {
  return (
    <View style={styles.container}>
      <Text style={gStyles.subtitle}>{goal.title}</Text>
      <Text style={{ color: "#fff" }}>{goal.description}</Text>
      <Text style={{ color: "#fff" }}>{goal.weekly}</Text>
    </View>
  );
};
export default Goal;
const styles = StyleSheet.create({
  container: {},
});
