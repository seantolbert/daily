import { StyleSheet, Animated, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState, useRef, useEffect } from "react";

const AddButton = ({ show, setShow, nav }) => {
  const { container, plusButton, shadow } = styles;

  return (
    <View style={container}>
      <Pressable style={plusButton} onLongPress={() => nav.navigate("addAct")}>
        <Entypo name="plus" size={24} color="black" style={{ padding: 10 }} />
      </Pressable>
    </View>
  );
};
export default AddButton;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginVertical: 30,
  },

  plusButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#372772",
  },

  shadow: {
    backgroundColor: "#828282",
    position: "absolute",
  },
});
