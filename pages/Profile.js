import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BackButton, HomeButton } from "../components";
import { gStyles } from "../styles/global";
const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton nav={navigation} />
      <Text style={gStyles.subtitle}>Profile</Text>
      <HomeButton nav={navigation} />
    </SafeAreaView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
  },
});
