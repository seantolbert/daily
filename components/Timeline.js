import { ScrollView, StyleSheet, Text, View } from "react-native";
import { eachDayOfInterval, sub } from "date-fns";
import { useEffect, useState, useRef } from "react";

import { gStyles } from "../styles/global";
import TlDay from "./TlDay";

const Timeline = ({ nav, date }) => {
  const today = new Date().getDate().valueOf();

  const [selected, setSelected] = useState(today);

  const scrollRef = useRef();

  const days = eachDayOfInterval({
    start: sub(new Date(date), { days: 20 }),
    end: new Date(date),
  }).map((day) => day.toDateString());

  const month = new Date(date).toLocaleString("default", { month: "long" });
  return (
    <View style={styles.container}>
      <Text style={gStyles.subtitle}>{month}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.tlContainer}
        ref={scrollRef}
        onContentSizeChange={() =>
          scrollRef.current?.scrollToEnd({ animated: true })
        }
      >
        {days.map((day, idx) => (
          <TlDay
            key={idx}
            day={day}
            selected={selected}
            setSelected={setSelected}
            nav={nav}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default Timeline;
const styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    alignItems: "center",
    borderRadius: "10px",
  },
  tlContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 2,
  },
});
