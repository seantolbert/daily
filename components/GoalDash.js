import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
import { useCollection } from "../hooks/useCollection";
import { useEffect, useState } from "react";
import DaySwitches from "./DaySwitches";
import GoalScroller from "./GoalScroller";

const GoalDash = () => {
  const { documents: goals } = useCollection("goals");
  const { documents: acts } = useCollection("activities");

  const [loading, setLoading] = useState(true);

  

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
        <View style={styles.dashCont}>
          <DaySwitches goals={goals} acts={acts} />
          <GoalScroller goals={goals} acts={acts} />
        </View>
      )}
    </View>
  );
};
export default GoalDash;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  dashCont: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    borderColor: "#fff",
    justifyContent: "space-between",
  },
});
