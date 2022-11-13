import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import {
  BackButton,
  HomeButton,
  Day,
  LatestPosts,
  MonthlyActList,
  Menu,
} from "../components";
import { gStyles } from "../styles/global";

const MonthView = ({ navigation }) => {
  const today = new Date().getDate();

  const [selected, setSelected] = useState(today);
  const [acts, setActs] = useState(false);

  console.log(selected);

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

  const { container, calendarContainer, monthText } = styles;

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} title="month view" />

      <MonthlyActList selected={selected} nav={navigation} />

      <View>
        {/* <Text style={monthText}>NOV</Text> */}
        <View style={calendarContainer}>
          {nov.map((day, idx) => (
            <Day
              key={idx}
              day={day}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </View>
      </View>
      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default MonthView;
const styles = StyleSheet.create({
  calendarContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  monthText: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
});
