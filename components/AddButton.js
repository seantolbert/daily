import { StyleSheet, View, Pressable, Animated } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState, useRef } from "react";

const GoalAddButton = ({ nav }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const shadowAnim = useRef(new Animated.Value(2)).current;

  const handlePressIn = () => {
    Animated.timing(shadowAnim, {
      useNativeDriver: true,
      toValue: 8,
      duration: 200,
    }).start();
  };
  const handlePressOut = () => {
    Animated.timing(shadowAnim, {
      useNativeDriver: true,
      toValue: 2,
      duration: 200,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.shadow,
          {
            width,
            height,
            transform: [{ translateX: shadowAnim }, { translateY: shadowAnim }],
          },
        ]}
      ></Animated.View>
      <Pressable
        style={styles.plusButton}
        onLongPress={() => nav.navigate("addGoal", { goal: {} })}
        onLayout={(e) => {
          const { width, height } = e.nativeEvent.layout;
          setHeight(height);
          setWidth(width);
        }}
        onPressIn={() => handlePressIn()}
        onPressOut={() => handlePressOut()}
      >
        <Entypo name="plus" size={40} color="#fff" />
      </Pressable>
    </View>
  );
};
export default GoalAddButton;
const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
  plusButton: {
    backgroundColor: "#000",
    borderRadius: "50%",
  },
  shadow: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: "50%",
  },
});
