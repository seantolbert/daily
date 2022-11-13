import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BackButton, Menu } from "../components";
import { gStyles } from "../styles/global";
const AddGoal = ({ navigation }) => {
  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} title="Add Goal"/>
      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default AddGoal;
const styles = StyleSheet.create({});
