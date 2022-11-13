import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
import { useCollection } from "../hooks/useCollection";
import Act from "../components/Act";

const MonthlyActList = ({ selected, nav }) => {
  const { documents: acts } = useCollection("activities");

  // const day = (date) => new Date(date).getDate();

  const handleDelete = async (id) => {
    const docRef = doc(db, "activities", id);
    await deleteDoc(docRef);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "95%",
          height: "100%",
          borderWidth: 2,
          borderColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={gStyles.subtitle}>Monthly ActList</Text>
        {acts &&
          acts
            .slice(0, 4)
            .filter((act) => act.date.valueOf() === selected)
            .sort((a, b) => Number(b.time) - Number(a.time))
            .map((act, idx) => (
              <Act key={idx} act={act} handleDelete={handleDelete} nav={nav} />
            ))}
      </View>
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
});
