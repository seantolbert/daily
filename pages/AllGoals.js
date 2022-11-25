import { StyleSheet,SafeAreaView } from "react-native";
import { AddButton, BackButton, GoalList, Menu } from "../components";
import { gStyles } from "../styles/global";

const AllGoals = ({ navigation }) => {
  // create a view screen component on top half of AllGoals page
  // the second half of the screen will be like a
  // selector for which goal's stats are betting viewed

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} title="goals" />

      {/*  */}
      {/* Goal Viewer */}
      {/*  */}

      {/* GoalKeyboard */}
      <GoalList nav={navigation} />
      {/*  */}

      {/*  */}
      {/* Add, update, delete, toolbar */}
      <AddButton nav={navigation} dest="allGoals" />
      {/*  */}

      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default AllGoals;
const styles = StyleSheet.create({});
