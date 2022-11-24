import { StyleSheet, Text, Pressable } from "react-native";



const TlDay = ({ selected, setSelected, day }) => {
  const date = new Date(day).getDate();
  const dow = new Date(day).toDateString().split(" ")[0];


  console.log(date);
  console.log(selected);

  return (
    <Pressable
      onPress={() => setSelected(date)}
      style={[
        styles.container,
        { backgroundColor: selected === date ? "#fff" : "#000" },
      ]}
    >
      <Text
        style={[styles.dow, { color: selected === date ? "#000" : "#fff" }]}
      >
        {dow}
      </Text>
      <Text
        style={[styles.date, { color: selected === date ? "#000" : "#fff" }]}
      >
        {date}
      </Text>
    </Pressable>
  );
};
export default TlDay;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: "5px",
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
