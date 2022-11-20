import { StyleSheet, Text, View } from "react-native";
import { useCollection } from "../hooks/useCollection";

import Act from "../components/Act";
import { gStyles } from "../styles/global";

const MainLatestActs = ({ nav, selected }) => {
  const { documents: acts } = useCollection("activities");

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {acts ? (
          acts
            .filter((act) => act.date === selected)
            .sort((a, b) => Number(b.time) - Number(a.time))
            .slice(0, 3)
            .map((act, idx) => <Act nav={nav} act={act} key={idx} />)
        ) : (
          <Text style={gStyles.subtitle}>No acts recorded for today</Text>
        )}
      </View>
    </View>
  );
};
export default MainLatestActs;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "25%",
    alignItems: "center",
  },
  listContainer: {
    height: "100%",
    borderRadius: "10px",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
