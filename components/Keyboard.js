import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Keyboard = ({ setIcon, isColor, setColor }) => {
  const icons = [
    "arrow-up-circle",
    "audio-input-xlr",
    "audio-video",
    "backburger",
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
    'cards',
    'cards-spade',
    'cards-heart',
    'cards-diamond',
    'cards-club',
  ];

  return (
    <View style={{ width: "100%", height: "30%", backgroundColor: "#474747" }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {icons.map((item, idx) => (
            <Pressable key={idx} onPress={() => setIcon(item)}>
              <MaterialCommunityIcons name={item} color="#fff" size={40} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default Keyboard;
const styles = StyleSheet.create({});
