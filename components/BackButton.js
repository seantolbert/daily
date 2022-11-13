import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { gStyles } from "../styles/global";
const BackButton = ({ nav, dest, title }) => {
  const { container } = styles;
  return (
    <View style={container}>
      <Text style={gStyles.subtitle}>{title}</Text>
      <Pressable
        style={{ position: "absolute", left: 0 }}
        onPress={dest ? () => nav.navigate(dest) : () => nav.goBack()}
      >
        <Ionicons name="chevron-back" size={30} color="#fff" />
      </Pressable>
    </View>
  );
};
export default BackButton;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
