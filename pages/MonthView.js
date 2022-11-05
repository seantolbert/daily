import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import { useState } from "react";
import { BackButton, HomeButton, Day } from "../components";

const MonthView = ({ navigation }) => {
  const today = new Date().getDay() - 1;

  const [selected, setSelected] = useState(today);
  const [acts, setActs] = useState(false);


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

  const { container, calendarContainer } = styles;

  return (
    <SafeAreaView style={container}>
      <BackButton nav={navigation} />
      <View style={calendarContainer}>
        {nov.map((day, idx) => (
          <Day key={idx} day={day} selected={selected} setSelected={setSelected}/>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  calendarContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
 
});
