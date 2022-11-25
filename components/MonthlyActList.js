import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import { useCollection } from "../hooks/useCollection";
import Act from "../components/Act";

const { width } = Dimensions.get("screen");
const widthView = width - 10;

const MonthlyActList = ({ selected, nav }) => {
  const { documents: acts } = useCollection("activities");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {acts &&
          acts
            .filter((act) => act.date.valueOf() === selected)
            .sort((a, b) => Number(b.time) - Number(a.time))
            // .slice(0, 3)
            .map((act, idx) => <Act key={idx} act={act} nav={nav} />)}
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
    // flex: 1
  },
  scrollContainer: {
    width: widthView,
    // width: '100%',
    height: "100%",
    // borderWidth: 2,
    // borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
