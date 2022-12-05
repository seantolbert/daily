import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Animated,
} from "react-native";

import { gStyles } from "../styles/global";
const Submit = ({ handler, color, setColor, showColor }) => {
  const baseColors = [
    "#fff",
    "#6b7280",
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
    "#84cc16",
    "#22c55e",
    "#10b981",
    "#14b8a6",
    "#06b6d4",
    "#0ea5e9",
    "#3b82f6",
    "#6366f1",
    "#8b5cf6",
    "#a855f7",
    "#d946ef",
    "#ec4899",
    "#f43f5e",
  ];

  console.log(showColor);

  const colorContainerAnim = useRef(new Animated.Value(-900)).current;

  useEffect(() => {
    showColor
      ? Animated.timing(colorContainerAnim, {
          useNativeDriver: true,
          toValue: 0,
          duration: 300,
        }).start()
      : Animated.timing(colorContainerAnim, {
          useNativeDriver: true,
          toValue: -900,
          duration: 300,
        }).start();
  }, [showColor]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.colorsContainer,
          { transform: [{ translateX: colorContainerAnim }] },
        ]}
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ flexDirection: "row", alignItems: "center" }}
        >
          {baseColors.map((c, idx) => (
            <Pressable
              onPress={() => setColor(c)}
              key={idx}
              style={[styles.colorBox, { backgroundColor: c }]}
            ></Pressable>
          ))}
        </ScrollView>
      </Animated.View>
      <Pressable
        onPress={() => handler()}
        style={[styles.button, { borderColor: color }]}
      >
        <Text style={gStyles.subtitle}>Submit</Text>
      </Pressable>
    </View>
  );
};
export default Submit;
const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "flex-end",
  },
  colorsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
  },
  colorBox: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: "10px",
  },
  button: {
    borderWidth: 5,
    padding: 15,
    borderRadius: "10px",
    width: "30%",
    marginLeft: 20,
  },
});
