import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
const Timeline = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tlContainer}>
        <Text style={gStyles.subtitle}>Weekly Timeline</Text>
      </View>
    </View>
  );
};
export default Timeline;
const styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    alignItems: "center",
  },
  tlContainer: {
    width: "90%",
    borderWidth: 2,
    borderRadius: "10px",
    borderColor: "#fff",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
