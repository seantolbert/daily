import { StyleSheet, Text, View } from "react-native";
import { useCollection } from "../hooks/useCollection";
import { gStyles } from "../styles/global";
import Goal from "./Goal";

const GoalList = () => {
  const { documents: goals } = useCollection("goals");
  return (
    <View style={styles.Container}>
      <View
        style={{
        //   height: "50%",
          justifyContent: "space-evenly",
          alignItems: 'flex-start'
        }}
      >
        {goals && goals.map((goal, idx) => <Goal key={idx} goal={goal} />)}
      </View>
    </View>
  );
};
export default GoalList;
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
