import { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";

const TlDay = ({ selected, setSelected, day }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const date = new Date(day).getDate();
  const dow = new Date(day).toDateString().split(" ")[0];

  return (
    <View style={{ marginHorizontal: 10 }}>
      <View
        style={{
          width,
          height,
          transform: [{ translateX: 3 }, { translateY: 3 }],
          position: "absolute",
          backgroundColor: selected === date ? "red" : "#fff",
          borderRadius: "5px",
        }}
      ></View>
      <Pressable
        onPress={() => setSelected(date)}
        onLayout={(e) => {
          const { width, height } = e.nativeEvent.layout;
          setHeight(height);
          setWidth(width);
        }}
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
    </View>
  );
};
export default TlDay;
const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 10,
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
