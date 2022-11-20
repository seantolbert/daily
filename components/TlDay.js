import { StyleSheet, Text, View, Pressable } from "react-native";

const TlDay = ({ selected, setSelected, day, nav }) => {
  const date = new Date(day).getDate();
  const dow = new Date(day).toDateString().split(" ")[0];

  // console.log(dow, date);

  return (
    <View style={styles.container}>
      <Text style={styles.dow}>{dow}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};
export default TlDay;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dow: {
    fontWeight: "bold",
    fontSize: 10,
    letterSpacing: 1.5,
    color: "#fff",
    textTransform: "uppercase",
  },
  date: {
    fontSize: 20,
    padding: 0,
    margin: 0,
    borderColor: "#fff",
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#fff",
  },
});
