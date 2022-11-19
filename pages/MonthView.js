import { useState } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { BackButton, Day, MonthlyActList, Menu } from "../components";

import { eachDayOfInterval, lastDayOfMonth, startOfMonth } from "date-fns";

import { gStyles } from "../styles/global";

const MonthView = ({ navigation }) => {
  const today = new Date().getDate();

  // console.log(lastDayOfMonth(new Date()).toDateString());
  // console.log(startOfMonth(new Date()).toDateString());
  const days = eachDayOfInterval({
    start: startOfMonth(new Date()),
    end: lastDayOfMonth(new Date()),
  }).map((day) => day.getDate());
  


  console.log(startOfMonth(new Date()).getDay());

  console.log(days);

  const [selected, setSelected] = useState(today);

  const weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

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

  const calendar = () => {
    const start = startOfMonth(new Date());
    const end = lastDayOfMonth(new Date());
    // create an array of the entire month
    let days = eachDayOfInterval({
      start,
      end,
      // extract the date of each day of the month from each array item
    }).map((day) => day.getDate());

    start.getDay();
    // determine what day of the week the month starts on
    // push empty spaces into the array for the days of the previous month
  };

  const { calendarContainer } = styles;

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} title="month view" />

      <MonthlyActList selected={selected} nav={navigation} />

      <View>
        <View style={styles.weekdays}>
          {weekDays.map((day, idx) => (
            <View style={styles.weekdayBox} key={idx}>
              <Text style={{ color: "#fff" }}>{day}</Text>
            </View>
          ))}
        </View>
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
  weekdays: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  weekdayBox: {
    width: "11%",
    alignItems: "center",
  },
});
