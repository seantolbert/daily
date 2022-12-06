import { Pressable, StyleSheet, Text, View } from "react-native";
import { useCollection } from "../hooks/useCollection";
import { gStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Goal from "./Goal";

const GoalList = ({ nav, setGoal }) => {
  const { documents: goals } = useCollection("goals");
  return (
    <View style={styles.container}>
      <View
        style={{
          // justifyContent: "space-evenly",
          alignItems: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {goals &&
          goals.map((goal, idx) => (
            <Pressable
              onPress={() => setGoal(goal)}
              key={idx}
              style={[styles.box, { backgroundColor: goal.color }]}
            >
              <MaterialCommunityIcons
                name={goal.icon || goal.title.toLowerCase()}
                size={30}
                color="#fff"
              />
              {/* <Text style={{ color: "#000", fontWeight: "bold" }}>
                {goal.title}
              </Text> */}
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
    borderRadius: "10px",
    margin: 5,
    alignItems: "center",
  },
});
