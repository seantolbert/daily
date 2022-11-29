import { StyleSheet, Text, View } from "react-native";
import { useRef } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { gStyles } from "../styles/global";

const DayViewAct = ({ act, setWidth, setOffsetX, setHeight }) => {
  const marbleRef = useRef();

  const date = new Date(act.time).toLocaleTimeString();
  const ampm = date.split(" ").pop().toLowerCase();
  const time = date.split(" ").shift();
  const standard = time.split(":").slice(0, -1).join(":");
  const result = standard + " " + ampm;

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
          style={[styles.marble, { backgroundColor: "black" }]}
        >
          <MaterialCommunityIcons
            name={act.icon}
            color={`#${act.color}`}
            size={25}
          />
        </View>
        <Text style={{ color: "#8c8c8c", marginLeft: 10, fontSize: 12 }}>
          {result}
        </Text>
      </View>
      <View style={[styles.actCont, { borderColor: `#${act.color}` }]}>
        <Text style={gStyles.subtitle}>{act.actText}</Text>
        {act.note && <Text style={{ color: "#fff" }}>{act.note}</Text>}
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
    flexDirection: "row",
  },
  marble: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  actCont: {
    padding: 10,
    width: "70%",
    borderWidth: 5,
    borderRadius: "10px",
    borderColor: "#fff",
  },
});
