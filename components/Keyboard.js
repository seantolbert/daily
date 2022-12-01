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
    "#6b7280",
    "#78716c",
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
  ];

  // console.log(themeColors.length);

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <View>
        {isColor ? (
          <View style={{ flexDirection: "row" }}>
            {baseColors.map((baseColor, idx) => {
              const themeColor = new Values(baseColor);
              // console.log(themeColor.all(25).length);
              return (
                <View key={idx}>
                  {themeColor.all(25).map((c, idx) => (
                    <View
                      key={idx}
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: `#${c.hexString()}`,
                      }}
                    ></View>
                  ))}
                </View>
              );
            })}
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {!isColor &&
              icons.map((item, idx) => (
                <Pressable key={idx} onPress={() => setIcon(item)}>
                  <MaterialCommunityIcons name={item} color="#fff" size={40} />
                </Pressable>
              ))}
          </View>
        )}
      </View>
    </View>
  );
};
export default Keyboard;
const styles = StyleSheet.create({});
