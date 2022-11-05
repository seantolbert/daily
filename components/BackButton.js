import { Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, View, Pressable } from "react-native";
const BackButton = ({ nav }) => {
  const { container } = styles;
  return (
    <View style={container}>
      <Pressable onPress={() => nav.goBack()}>
      <Entypo name="back" size={40} color="black" />
      </Pressable>
    </View>
  );
};
export default BackButton;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 20,
  },
});
