import { StyleSheet, Text, View } from "react-native";

import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useRef } from "react";

import { gStyles } from "../styles/global";
import { getTime } from "date-fns/esm";
import { daysToWeeks, getHours } from "date-fns";
const DayViewAct = ({ act, setWidth, setOffsetX, setHeight }) => {
  const marbleRef = useRef();

  return (
    <View
      style={styles.container}
      onLayout={(e) => {
        const { height } = e.nativeEvent.layout;
        setHeight(height);
      }}
    >
      <View style={styles.marbleCont}>
        <View
          ref={marbleRef}
          onLayout={(e) => {
            const { width, x } = e.nativeEvent.layout;
            setOffsetX(x);
            setWidth(width);
          }}
          style={[styles.marble, { backgroundColor: `#${act.color}` }]}
        ></View>
      </View>
      <View style={[styles.actCont, { borderColor: `#${act.color}` }]}>
        <Text style={{ color: "#fff" }}>{act.actText}</Text>
        <Text style={{ color: "#fff" }}>{act.fullDate}</Text>
        <Text style={{ color: "#fff" }}>{new Date(act.time).toLocaleTimeString()}</Text>
        <Text style={{ color: "#fff" }}>{act.category}</Text>
        <Text style={{ color: "#fff" }}>{act.color}</Text>
      </View>
    </View>
  );
};
export default DayViewAct;
const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
  },
  marbleCont: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  marble: {
    // borderWidth: 3,
    borderRadius: "50%",
    // borderColor: "#fff",
    width: 15,
    height: 15,
  },
  actCont: {
    padding: 10,
    width: "70%",
    borderWidth: 5,
    borderRadius: "10px",
    borderColor: "#fff",
  },
});
