import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
import { useCollection } from "../hooks/useCollection";
import { useEffect, useState } from "react";
import { getWeek } from "date-fns";

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
      acts &&
      acts
        .filter(
          (act) => getWeek(new Date(act.fullDate)) === getWeek(new Date())
        )
        .filter((act) => act.category === category);
    return filteredActs.length;
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={gStyles.subtitle}>Loading ...</Text>
      ) : (
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
                <View>
                  <Text style={{color: '#fff'}}>
                    total: {totalActCount(goal.title)}
                  </Text>
                  <Text style={{color: '#fff'}}>
                    weekly: {weeklyActCount(goal.title)}
                  </Text>
                </View>
              </View>
            ))}
        </View>
      )}
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
  },
  dashContainer: {
    justifyContent: "space-evenly",
    height: "100%",
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  goalBox: {
    width: "45%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#828282",
    marginBottom: 10,
    borderRadius: "10px",
  },
});
