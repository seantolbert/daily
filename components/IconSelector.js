import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { useState } from "react";

const IconSelector = ({ category, setCategory }) => {
  const categories = ["workout", "music", "apps", "social", "none"];

  return (
    <View style={styles.container}>
      <View>
        {category === "none" && (
          <MaterialCommunityIcons
            name="checkbox-blank-circle-outline"
            size={24}
            color="#fff"
          />
        )}

        {category === "workout" && (
          <MaterialCommunityIcons name="weight-lifter" size={24} color="#fff" />
        )}

        {category === "music" && (
          <MaterialCommunityIcons name="music" size={24} color="#fff" />
        )}

        {category === "social" && (
          <MaterialCommunityIcons
            name="human-greeting-proximity"
            size={24}
            color="#fff"
          />
        )}

        {category === "apps" && (
          <MaterialCommunityIcons name="briefcase" size={24} color="#fff" />
        )}
      </View>
      {categories.map((title, idx) => (
        <IconButton
          key={idx}
          selected={category}
          setSelected={setCategory}
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
