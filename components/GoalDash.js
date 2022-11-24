import { Animated, StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
import { useCollection } from "../hooks/useCollection";
import { useEffect, useState, useRef } from "react";
import LottieView from "lottie-react-native";
import { getWeek, isToday } from "date-fns";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const GoalDash = () => {
  const [loading, setLoading] = useState(true);

  const { documents: goals } = useCollection("goals");
  const { documents: acts } = useCollection("activities");

  const dailyCountTotal = () => {
    const filteredActs =
      acts && acts.filter((act) => isToday(new Date(act.fullDate)));
    return filteredActs;
  };

  // console.log(dailyCountTotal().length)

  const totalActCount = (id) => {
    const filteredActs = acts && acts.filter((act) => act.category === id);
    return filteredActs.length;
  };

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {}, []);

  return (
    <View style={[styles.container]}>
      {loading ? (
        <Text style={gStyles.subtitle}>Loading ...</Text>
      ) : (
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <View style={{ width: "25%", height: "100%" }}>
            <Text style={gStyles.subtitle}>Daily</Text>
            {goals &&
              goals
                .filter((goal) => goal.daily)
                .map((goal, idx) => (
                  <View key={idx} style={{ backgroundColor: `#${goal.color}` }}>
                    <Text style={{ color: "#fff" }}>{goal.title}</Text>
                  </View>
                ))}
          </View>
          <View style={styles.weeklyContainer}>
            <Text style={[gStyles.subtitle, { width: "100%" }]}>weekly</Text>
            {goals &&
              goals
                // .filter((act) => !act.daily)
                .map((goal, idx) => (
                  <View
                    key={idx}
                    style={[styles.goalBox, { borderColor: `#${goal.color}` }]}
                  >
                    {/* <Text style={gStyles.subtitle}>{goal.title}</Text> */}
                    <MaterialCommunityIcons
                      name={goal.title.toLowerCase()}
                      size={24}
                      color="#fff"
                    />
                    <View>
                      <View style={{ alignItems: "center" }}>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 30,
                            fontWeight: "bold",
                            color: `#${goal.color}`,
                          }}
                        >
                          {Math.round(
                            (weeklyActCount(goal.id) / goal.weekly) * 100
                          ) + "%"}
                        </Text>
                        <Text style={{ color: "#fff" }}>
                          {weeklyActCount(goal.id)} / {goal.weekly}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
          </View>
        </View>
      )}
    </View>
  );
};
export default GoalDash;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
  weeklyContainer: {
    height: "100%",
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  goalBox: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 8,
    padding: 10,
    borderRadius: "10px",
  },
});
