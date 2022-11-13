import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
const MainLatestActs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={gStyles.subtitle}>today's latest (3)</Text>
      </View>
    </View>
  );
};
export default MainLatestActs;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "25%",
    alignItems: "center",
  },
  listContainer: {
    height: "100%",
    borderRadius: "10px",
    width: "90%",
    borderColor: "#fff",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
