import {
  StyleSheet,
  Animated,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { useEffect, useRef } from "react";

import Values from "values.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Keyboard = ({ setIcon, isColor, setColor }) => {
  // console.log("isColor: " + isColor);
  const icons = [
    "arrow-up-circle",
    "audio-input-xlr",
    "audio-video",
    // "backburger",
    "backspace",
    "badminton",
    "baguette",
    "barcode",
    "barley",
    "battery-40",
    "binoculars",
    "react",
    "bike",
    "instagram",
    "youtube",
    "anvil",
    "twitter",
    "slack",
    "discord",
    "git",
    "zodiac-aries",
    "zodiac-aquarius",
    "zodiac-cancer",
    "zodiac-capricorn",
    "zodiac-gemini",
    "zodiac-leo",
    "zodiac-libra",
    "zodiac-pisces",
    "zodiac-virgo",
    "zodiac-taurus",
    "zodiac-scorpio",
    "zodiac-sagittarius",
    "cards",
    "cards-spade",
    "cards-heart",
    "cards-diamond",
    "cards-club",
    "select-color",
    "select-compare",
    "select-group",
    "select-drag",
    "select-inverse",
    "select-marker",
    "select-off",
    "select-search",
    "selection",
  ];

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

  // baseColors.map((c, idx) => {
  //   const themeColor = new Values(c);
  //   console.log(themeColor);
  // });

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {!isColor
            ? icons.map((item, idx) => (
                <Pressable key={idx} onPress={() => setIcon(item)}>
                  <MaterialCommunityIcons name={item} color="#fff" size={40} />
                </Pressable>
              ))
            : baseColors.map((item, idx) => {
                const themeColor = new Values(item);
                // console.log(themeColor.all(4));
                themeColor.all(4).map((c, idx) => {
                  // console.log('hexString: ' + c.hexString())
                  return (
                    <View
                      key={idx}
                      style={{
                        width: 19,
                        height: 19,
                        borderRadius: "10px",
                        backgroundColor: c.hexString(),
                      }}
                    ></View>
                  );
                });
              })}
        </View>
      </View>
    </View>
  );
};
export default Keyboard;
const styles = StyleSheet.create({});
