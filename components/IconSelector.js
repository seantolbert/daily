import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { useState } from "react";

const IconSelector = () => {
  const [selected, setSelected] = useState("none");

  console.log(selected);

  const categories = ["workout", "music", "apps", "social", "none"];
  const icons = [];

  return (
    <View style={styles.container}>
      <View>
        {selected === "none" && (
          <MaterialCommunityIcons
            name="checkbox-blank-circle-outline"
            size={24}
            color="#fff"
          />
        )}

        {selected === "workout" && (
          <MaterialCommunityIcons name="weight-lifter" size={24} color="#fff" />
        )}

        {selected === "music" && (
          <MaterialCommunityIcons name="music" size={24} color="#fff" />
        )}

        {selected === "social" && (
          <MaterialCommunityIcons
            name="human-greeting-proximity"
            size={24}
            color="#fff"
          />
        )}

        {selected === "apps" && (
          <MaterialCommunityIcons name="briefcase" size={24} color="#fff" />
        )}
      </View>
      {categories.map((title, idx) => (
        <IconButton
          key={idx}
          selected={selected}
          setSelected={setSelected}
          title={title}
        />
      ))}
    </View>
  );
};
export default IconSelector;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
