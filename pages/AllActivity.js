import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { HomeButton, BackButton, LatestPosts, Menu } from "../components";
import { gStyles } from "../styles/global";

const AllActivity = ({ navigation }) => {
  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} />
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <LatestPosts />
      </ScrollView>
      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default AllActivity;
const styles = StyleSheet.create({});
