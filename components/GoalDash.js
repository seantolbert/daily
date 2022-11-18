import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
import { useCollection } from "../hooks/useCollection";
import { useEffect, useState } from "react";

const GoalDash = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [loading, setLoading] = useState(true);

  const { documents: goals } = useCollection("goals");
  const { documents: acts } = useCollection("activities");

  const totalActCount = (category) => {
    const filteredActs =
      acts && acts.filter((act) => act.category === category);
    return filteredActs.length;
  };
  const weeklyActCount = (category) => {
    const filteredActs =
    acts && acts.filter((act) => {
        const day = act.date.getDay().valueOf()

        act.category === category
        // if day is greater than 0
      })
    return filteredActs.length;
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Text style={gStyles.subtitle}>Loading ... </Text>;
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.dashContainer}
        onLayout={(e) => {
          const { width, height } = e.nativeEvent.layout;
          setWidth(width);
          setHeight(height);
        }}
      >
        {goals &&
          goals.map((goal, idx) => (
            <View key={idx} style={styles.goalBox}>
              <Text style={gStyles.subtitle}>{goal.title}</Text>
              <Text style={gStyles.subtitle}>
                total: {totalActCount(goal.title)}
              </Text>
              {/* <Text style={gStyles.subtitle}>
                total: {actCount(goal.title)}
              </Text> */}
            </View>
          ))}
      </View>
    </View>
  );
};
export default GoalDash;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "#fff",
  },
  dashContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  goalBox: {
    width: "45%",
    height: "45%",
  },
});
