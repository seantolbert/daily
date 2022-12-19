import { ScrollView, StyleSheet, Dimensions, View, Text } from "react-native";
import { useCollection } from "../hooks/useCollection";
import Act from "../components/Act";
import { gStyles } from "../styles/global";

const { width } = Dimensions.get("screen");
const widthView = width - 10;

const MonthlyActList = ({ selected, nav }) => {
  const { documents: acts } = useCollection("activities");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {acts && acts.length > 0 ? (
          acts
            .filter((act) => act.date === selected)
            .sort((a, b) => Number(b.time) - Number(a.time))
            .slice(0, 3)
            .map((act, idx) => <Act key={idx} act={act} nav={nav} />)
        ) : (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <Text style={gStyles.subtitle}>No acts recorded for today</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default MonthlyActList;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },

  scrollContainer: {
    width: widthView,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
