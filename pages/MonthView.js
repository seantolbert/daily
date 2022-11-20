import { useState } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { BackButton, Day, MonthlyActList, Menu } from "../components";

import { eachDayOfInterval, lastDayOfMonth, startOfMonth } from "date-fns";

import { gStyles } from "../styles/global";

const MonthView = ({ navigation }) => {
  const today = new Date().getDate();

  const [selected, setSelected] = useState(today);

  const weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  const start = startOfMonth(new Date());
  const end = lastDayOfMonth(new Date());
  
  let days = eachDayOfInterval({
    start,
    end,
  }).map((day) => day.getDate());

  start.getDay();
  end.getDay();

  const beforeArr = Array.from(new Array(start.getDay()), (s) => "");
  const afterArr = Array.from(new Array(6 - end.getDay()), () => "");

  let fullCal = [];
  fullCal.push(...beforeArr, ...days, ...afterArr);

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
        <View style={styles.calendarContainer}>
          {fullCal.map((day, idx) => (
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
