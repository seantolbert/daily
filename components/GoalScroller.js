import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getWeek } from "date-fns";

const GoalScroller = ({ goals, acts }) => {
  const weeklyActCount = (id) => {
    const filteredActs =
      acts &&
      acts
        .filter(
          (act) => getWeek(new Date(act.fullDate)) === getWeek(new Date())
        )
        .filter((act) => act.category === id);
    return filteredActs.length;
  };

  return (
    <ScrollView>
      {goals &&
        goals.map((goal, idx) => (
          <View key={idx} style={[styles.goalBox, { borderColor: goal.color }]}>
            <View style={{ alignItems: "center" }}>
              <Text style={[styles.colorPercent, { color: goal.color }]}>
                {Math.round((weeklyActCount(goal.id) / goal.weekly) * 100) +
                  "%"}
              </Text>
            </View>
            <MaterialCommunityIcons
              name={goal.icon || goal.title.toLowerCase()}
              size={35}
              color="#fff"
            />
          </View>
        ))}
    </ScrollView>
  );
};
export default GoalScroller;
const styles = StyleSheet.create({
  goalBox: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 1,
    width: 90,
    borderRadius: "10px",
    // borderColor: "#fff",
    // borderWidth: 1,
  },
  colorPercent: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
  },
});
