import { StyleSheet, View, Pressable, Text, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useRef } from "react";
import { gStyles } from "../styles/global";

const ActionButton = ({ nav, icon, dest, label }) => {
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
        onLongPress={() => {
          if (dest) {
            nav.navigate(dest);
          }
        }}
        onLayout={(e) => {
          const { width, height } = e.nativeEvent.layout;
          setHeight(height);
          setWidth(width);
        }}
        onPressIn={() => handlePressIn()}
        onPressOut={() => handlePressOut()}
      >
        {label ? (
          <Text style={gStyles.subtitle}>{label}</Text>
        ) : (
          <MaterialCommunityIcons name={icon} size={40} color="#fff" />
        )}
      </Pressable>
    </View>
  );
};
export default ActionButton;
const styles = StyleSheet.create({
  container: {
    // width: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
  plusButton: {
    backgroundColor: "#000",
    padding: 30,
    borderRadius: "50%",
  },
  shadow: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: "50%",
  },
});
