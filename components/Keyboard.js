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

  return (
    <View
      style={{
        width: "100%",
        marginTop: 20,
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
          {icons.map((i, idx) => (
            <Pressable onPress={() => setIcon(i)} key={idx}>
              <MaterialCommunityIcons name={i} color="#fff" size={40} />
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};
export default Keyboard;
const styles = StyleSheet.create({});
