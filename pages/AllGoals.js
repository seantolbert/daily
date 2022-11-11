import { StyleSheet, Text, View } from "react-native";
import { BackButton, GoalList, HomeButton } from "../components";
import { gStyles } from "../styles/global";


const AllGoals = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BackButton nav={navigation} />
      <Text style={gStyles.subtitle}>All Goals</Text>
      <GoalList />
      <HomeButton nav={navigation} />
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
