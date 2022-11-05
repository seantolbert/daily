import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { BackButton, HomeButton } from "../components";

const MonthView = ({ navigation }) => {
  const [date, setDate] = useState(null);
  const [activity, setActivity] = useState(false);

  const today = new Date().getDay() - 1;

  const nov = [
    "",
    "",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    "",
    "",
    "",
  ];

  const { container, dateBox, dateBoxText, calendarContainer } = styles;

  return (
    <SafeAreaView style={container}>
      <BackButton nav={navigation} />
      <View style={calendarContainer}>
        {nov.map((day, idx) => (
          <Pressable
            key={idx}
            style={[dateBox, day === today && { backgroundColor: "gold" }]}
          >
            <Text style={dateBoxText}>{day}</Text>
            {activity && <FontAwesome name="square" size={24} color="black" />}
          </Pressable>
        ))}
      </View>
      <HomeButton nav={navigation} />
    </SafeAreaView>
  );
};
export default MonthView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  dateBox: {
    padding: 15,
    width: "13%",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    margin: 2,
    backgroundColor: "lightblue",
    borderRadius: "5px",
  },
});
