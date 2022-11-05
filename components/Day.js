import { StyleSheet, Text, View, Pressable, Animated } from "react-native";

import { useState, useEffect, useRef } from "react";

const Day = ({ day, selected, setSelected, acts }) => {
  const [shadowHeight, setShadowHeight] = useState(0);
  const [shadowWidth, setShadowWidth] = useState(0);

  const shadowSlide = useRef(new Animated.Value(2)).current;

  const handleShadow = () => {
    Animated.timing(shadowSlide, {
      useNativeDriver: true,
      duration: 600,
      toValue: 5,
    }).start();
  };

  const { dateBox, dateBoxText, shadow, container } = styles;

  return (
    <View
      style={container}
      onLayout={(e) => {
        let { width, height } = e.nativeEvent.layout;
        setShadowHeight(height);
        setShadowWidth(width);
        // handleShadow();
      }}
    >
      <Animated.View
        style={[
          shadow,
          { width: shadowWidth, height: shadowHeight },
          day === selected && {
            transform: [
              { translateX: shadowSlide },
              { translateY: shadowSlide },
            ],
            backgroundColor: "#000",
          },
        ]}
      ></Animated.View>
      <Pressable
        style={dateBox}
        onPress={() => {
          setSelected(day);
          handleShadow();
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
    transform: [{ translateX: 2 }, { translateY: 2 }],
    backgroundColor: "#e3e3e3",
  },
});
