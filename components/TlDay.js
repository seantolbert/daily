import { StyleSheet, Text, View, Pressable } from "react-native";
import { gStyles } from "../styles/global";

const TlDay = ({ today, day, nav }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text
        style={[
          styles.number,
          {
            color: day === today ? "#000" : "#fff",
            backgroundColor: day === today ? "#fff" : "#000",
          },
        ]}
      >
        {day}
      </Text>
    </View>
  );
};
export default TlDay;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  line: {
    width: 2,
    position: "absolute",
    height: "100%",
    backgroundColor: "white",
  },
  number: {
    fontSize: 30,
    padding: 0,
    margin: 0,
    borderColor: "#fff",
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
