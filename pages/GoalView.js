import { Text, View, Pressable } from "react-native";
import { BackButton, Menu } from "../components";
import { gStyles } from "../styles/global";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCollection } from "../hooks/useCollection";
import { useEffect } from "react";

const GoalView = ({ navigation, goal }) => {
  const { documents: acts } = useCollection("activities");
  // filtering for selected goal's id

  // const goalActs = acts && acts.filter((act) => act.category === goal.id);

  if (goal === null) {
    return <Text style={{ color: "#fff" }}>Select Goal</Text>;
  } else {
    // console.log(acts[2].category );
    // console.log(goal.id);

    // goalActs;
    return (
      <View style={{ alignItems: "center" }}>
        {/* <BackButton nav={navigation} title={goal.title} /> */}
        {/* <Pressable onPress={() => navigation.navigate("addGoal")}>
        <MaterialCommunityIcons name="plus" color="#fff" size={30} />
      </Pressable> */}
        <Text style={gStyles.subtitle}>{goal.title}</Text>
        {/* <Menu nav={navigation} /> */}
      </View>
    );
  }
};
export default GoalView;
