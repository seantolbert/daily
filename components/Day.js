import { StyleSheet, Text, View, Pressable } from "react-native";

import { useState, useEffect, useRef } from "react";

const Day = ({ day, selected, acts }) => {
  const [shadowHeight, setShadowHeight] = useState(0);
  const [shadowWidth, setShadowWidth] = useState(0);

  const today = new Date().getDay() - 1;

  const { dateBox, dateBoxText, shadow, container } = styles;

  return (
    <View
      style={container}
      onLayout={(e) => {
        let { width, height } = e.nativeEvent.layout;
        setShadowHeight(height);
        setShadowWidth(width);
      }}
    >
      <View
        style={[shadow, { width: shadowWidth, height: shadowHeight }]}
      ></View>
      <Pressable
        style={[
          dateBox,
          //  day === today && { backgroundColor: "#828282" }
        ]}
      >
        <Text style={dateBoxText}>{day}</Text>
      </Pressable>
    </View>
  );
};
export default Day;
const styles = StyleSheet.create({
  container: {
    width: "11%",
    margin: 5,
    height: 80,
  },
  dateBox: {
    backgroundColor: "#fff",
    height: "100%",
    padding: 5,
    alignItems: "center",
  },
  shadow: {
    position: "absolute",
    transform: [{ translateX: 5 }, {translateY: 5}],
    backgroundColor: "#828282",
  },
});
