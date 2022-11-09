import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { HomeButton, BackButton, LatestPosts } from "../components";

const AllActivity = ({ navigation }) => {
  const { container } = styles;

  return (
    <SafeAreaView style={container}>
      <BackButton nav={navigation} />
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <LatestPosts />
      </ScrollView>
      <HomeButton nav={navigation} />
    </SafeAreaView>
  );
};
export default AllActivity;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
});
