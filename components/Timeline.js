import { ScrollView, StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
import TlDay from "./TlDay";

const Timeline = ({ nav }) => {
  const today = new Date().getDate().valueOf();

  const days = [10, 11, 12, 13, 14, 15, 16, 17, 18];

  // get month name
  const dateStr = new Date().toDateString();
  const dateStrArr = dateStr.split(" ");
  const month = dateStrArr[1];


  return (
    <View style={styles.container}>
      <Text style={gStyles.subtitle}>{month}</Text>
      <ScrollView horizontal contentContainerStyle={styles.tlContainer}>
        {days.map((day, idx) => (
          <TlDay key={idx} day={day} today={today} nav={nav} />
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
    flexDirection: "row-reverse",
    paddingVertical: 2,
  },
});
