import { StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";

const AddButton = ({ nav, show, setShow }) => {
  const { container, plusButton, plusInner } = styles;

  return (
    <View style={container}>
      <Pressable style={plusButton} onPress={() => setShow(!show)}>
        <View style={plusInner}>
          <Entypo name="plus" size={24} color="black" style={{ padding: 10 }} />
          {/* <Text>yoyoyoyoyo</Text> */}
        </View>
      </Pressable>
    </View>
  );
};
export default AddButton;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  plusButton: {
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
  },
  plusInner: {
    paddingVertical: 20,
    marginVertical: 3,
    marginRight: 3,
    borderWidth: 3,
    borderBottomRightRadius: 26,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
