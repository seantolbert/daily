import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BackButton, HomeButton, Menu } from "../components";
import { gStyles } from "../styles/global";
const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} />
      <Text style={gStyles.subtitle}>Profile</Text>
      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default Profile;
const styles = StyleSheet.create({});