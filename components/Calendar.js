import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";

import { eachDayOfInterval, lastDayOfMonth, startOfMonth } from "date-fns";
import Day from "./Day";

const Calendar = ({ selected, setSelected, date }) => {
  const start = startOfMonth(new Date(date));
  const end = lastDayOfMonth(new Date(date));

  const weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  let days = eachDayOfInterval({ start, end }).map((day) => day.getDate());

  start.getDay();
  end.getDay();

  const beforeArr = Array.from(new Array(start.getDay()), () => "");
  const afterArr = Array.from(new Array(6 - end.getDay()), () => "");

  let fullCal = [];
  fullCal.push(...beforeArr, ...days, ...afterArr);

  return (
    <View>
      <View style={styles.weekdays}>
        {weekDays.map((day, idx) => (
          <View style={styles.weekdayBox} key={idx}>
            <Text
              style={[gStyles.subtitle, { fontSize: 10, letterSpacing: 0.8 }]}
            >
              {day}
            </Text>
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
  );
};
export default Calendar;
const styles = StyleSheet.create({
  monthContainer: {
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
  },
  weekdays: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  weekdayBox: {
    width: "11%",
    alignItems: "center",
  },
  calendarContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
