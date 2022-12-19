import { Text, View, Pressable } from "react-native";
import { BackButton, Menu } from "../components";
import { gStyles } from "../styles/global";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCollection } from "../hooks/useCollection";
import { useEffect } from "react";

const GoalView = ({ goal }) => {
  const { documents: acts } = useCollection("activities");

  if (goal === null) {
    return <Text style={{ color: "#fff" }}>Select Goal</Text>;
  } else {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={gStyles.subtitle}>{goal.title}</Text>
      </View>
    );
  }
};
export default GoalView;
