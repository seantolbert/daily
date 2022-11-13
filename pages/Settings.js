import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BackButton, Menu } from "../components";
import { gStyles } from "../styles/global";
const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} title="settings"/>
      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default Settings;
const styles = StyleSheet.create({});
