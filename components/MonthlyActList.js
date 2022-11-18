import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import { gStyles } from "../styles/global";
import { useCollection } from "../hooks/useCollection";
import Act from "../components/Act";

const {width} = Dimensions.get('screen')
const widthView = width - 10

const MonthlyActList = ({ selected, nav }) => {
  const { documents: acts } = useCollection("activities");

  // const day = (date) => new Date(date).getDate();

  const handleDelete = async (id) => {
    const docRef = doc(db, "activities", id);
    await deleteDoc(docRef);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {acts &&
          acts
            .filter((act) => act.date.valueOf() === selected)
            .sort((a, b) => Number(b.time) - Number(a.time))
            .slice(0, 3)
            .map((act, idx) => (
              <Act key={idx} act={act} handleDelete={handleDelete} nav={nav} />
            ))}
      </ScrollView>
    </View>
  );
};
export default MonthlyActList;
const styles = StyleSheet.create({
  container: {
    // width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    // flex: 1
  },
  scrollContainer: {
    width: widthView,
    height: "100%",
    // borderWidth: 2,
    // borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
