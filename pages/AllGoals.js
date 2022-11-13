import { StyleSheet, Text, SafeAreaView } from "react-native";
import { BackButton, GoalList, Menu } from "../components";
import { gStyles } from "../styles/global";

const AllGoals = ({ navigation }) => {
  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} title="All goals"/>
      <GoalList />
      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default AllGoals;
const styles = StyleSheet.create({});
