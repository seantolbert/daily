import { StyleSheet, Text, View, Pressable, Animated } from "react-native";

import { useState, useEffect, useRef } from "react";

const Day = ({ day, selected, setSelected }) => {
  const [shadowHeight, setShadowHeight] = useState(0);
  const [shadowWidth, setShadowWidth] = useState(0);

  const shadowSlide = useRef(new Animated.Value(2)).current;

  useEffect(() => {
    day === selected
      ? Animated.timing(shadowSlide, {
          useNativeDriver: true,
          duration: 300,
          toValue: 10,
        }).start()
      : Animated.timing(shadowSlide, {
          useNativeDriver: true,
          duration: 300,
          toValue: 2,
        }).start();
  }, [selected]);

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
      <Animated.View
        style={[
          shadow,
          { width: shadowWidth, height: shadowHeight },
          {
            transform: [
              { translateX: shadowSlide },
              { translateY: shadowSlide },
            ],
          },
        ]}
      ></Animated.View>
      <Pressable
        style={dateBox}
        onPress={() => {
          if (typeof day === "number") setSelected(day);
        }}
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
    height: 60,
  },
  dateBox: {
    backgroundColor: "#000",
    height: "100%",
    padding: 5,
    alignItems: "flex-start",
    borderRadius: "10px",
  },
  dateBoxText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  shadow: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
});
