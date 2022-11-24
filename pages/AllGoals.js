import { StyleSheet, Text, SafeAreaView } from "react-native";
import { AddButton, BackButton, GoalList, Menu } from "../components";
import { gStyles } from "../styles/global";

const AllGoals = ({ navigation }) => {
  return (
    <SafeAreaView style={[gStyles.pageContainer, { justifyContent: "space-between" }]}>
      <BackButton nav={navigation} title="goals" />
      <AddButton nav={navigation} dest="allGoals" />
      <GoalList nav={navigation}/>
      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default AllGoals;
const styles = StyleSheet.create({});
