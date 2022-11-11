import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { useState } from "react";

const IconSelector = () => {

    const [selected, setSelected] = useState(null)

  const icons = [
    <MaterialCommunityIcons name="weight-lifter" size={24} color="white" />,
    <MaterialCommunityIcons name="water" size={24} color="white" />,
    <MaterialCommunityIcons name="music" size={24} color="white" />,
    <MaterialCommunityIcons name="briefcase" size={24} color="white" />,
    <MaterialCommunityIcons name="account-plus" size={24} color="white" />,
    <MaterialCommunityIcons
      name="human-greeting-proximity"
      size={24}
      color="white"
    />,
    <MaterialCommunityIcons name="dog-side" size={24} color="white" />,
    <MaterialCommunityIcons name="food-apple" size={24} color="white" />,
  ];


  return (
    <View style={styles.container}>
      {icons.map((icon, idx) => (
        <IconButton selected={selected} setSelected={setSelected} key={idx}>
          {icon}
        </IconButton>
      ))}
    </View>
  );
};
export default IconSelector;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
