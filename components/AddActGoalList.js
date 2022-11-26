import { StyleSheet, View, Pressable } from "react-native";
import { useCollection } from "../hooks/useCollection";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AddActGoalList = ({ setCategory, setIcon, setPlaceholder, setColor }) => {
  const { documents: goals } = useCollection("goals");

  return (
    <View style={styles.container}>
      {goals &&
        goals.map((goal, idx) => (
          <Pressable
            key={idx}
            onPress={() => {
              setCategory(goal.id);
              console.log(goal.id);
              setColor(goal.color);
              setPlaceholder(goal.placeholder);
              setIcon(goal.icon);
            }}
            style={[
              styles.goalButton,
              {
                backgroundColor: `#${goal.color}`,
              },
            ]}
          >
            <MaterialCommunityIcons
              name={goal.icon || goal.title.toLowerCase()}
              size={40}
              color="#000"
            />
          </Pressable>
        ))}
    </View>
  );
};
export default AddActGoalList;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "95%",
  },
  goalButton: {
    padding: 5,
    margin: 5,
    borderRadius: "10px",
    flexDirection: "row",
    alignItems: "center",
  },
});
