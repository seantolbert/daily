import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Pressable } from "react-native";
const HomeButton = ({ nav }) => {
  const { container, button } = styles;
  return (
    <View style={container}>
      <Pressable style={button} onPress={() => nav.navigate("main")}>
        <MaterialIcons name="home" size={40} color="black" />
      </Pressable>
    </View>
  );
};
export default HomeButton;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
  },
  button: {
    margin: 20,
  },
});
