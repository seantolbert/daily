import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Pressable } from "react-native";
const BackButton = ({ nav, dest }) => {
  const { container } = styles;
  return (
    <View style={container}>
      <Pressable onPress={dest ? () => nav.navigate(dest) : () => nav.goBack()}>
        <Ionicons name="chevron-back" size={30} color="#fff" />
      </Pressable>
    </View>
  );
};
export default BackButton;
const styles = StyleSheet.create({
  container: {
    width: "90%",
    margin: 20,
  },
});
