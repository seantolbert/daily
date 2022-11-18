import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
import { useCollection } from "../hooks/useCollection";

import { Act } from "../components";

const MainLatestActs = ({ nav }) => {
  const { documents: acts } = useCollection("activities");

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {acts &&
          acts
            .sort((a, b) => Number(b.time) - Number(a.time))
            .slice(0, 3)
            .map((act, idx) => <Act nav={nav} act={act} key={idx} />)}
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
    width: "90%",
    // borderColor: "#fff",
    // borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
