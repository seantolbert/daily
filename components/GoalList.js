import { Pressable, StyleSheet, Text, View } from "react-native";
import { useCollection } from "../hooks/useCollection";
import { gStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Goal from "./Goal";

const GoalList = ({ nav }) => {
  const { documents: goals } = useCollection("goals");
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
        {goals &&
          goals.map((goal, idx) => (
            <Pressable
              onPress={() => nav.navigate("goalView", { goal })}
              key={idx}
              style={[styles.box, { backgroundColor: `#${goal.color}` }]}
            >
              <MaterialCommunityIcons
                name={goal.title.toLowerCase()}
                size={30}
                color="#fff"
              />
              <Text style={{ color: "#fff" }}>{goal.title}</Text>
            </Pressable>
          ))}
      </View>
    </View>
  );
};
export default GoalList;
const styles = StyleSheet.create({
  container: {
    width: "95%",
  },
  box: {
    padding: 20,
  },
});
