import { Pressable, StyleSheet, Text, View } from "react-native";
import { useCollection } from "../hooks/useCollection";
import { gStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import Goal from "./Goal";

const GoalList = ({ nav }) => {
  const { documents: goals } = useCollection("goals");
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {goals && goals.length > 0 ? (
          goals.map((goal, idx) => (
            <Pressable
              onPress={() => nav.dispatch(CommonActions.setParams({ goal }))}
              key={idx}
              style={[styles.box, { backgroundColor: goal.color }]}
            >
              <MaterialCommunityIcons
                name={goal.icon || goal.title.toLowerCase()}
                size={30}
                color="#fff"
              />
            </Pressable>
          ))
        ) : (
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={[gStyles.subtitle, {textAlign: 'center'}]}>Add your first goal by pressing the 'New Goal' button below</Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default GoalList;
const styles = StyleSheet.create({
  container: {
    width: "95%",
    // height: "28%",
  },
  box: {
    padding: 20,
    borderRadius: "10px",
    margin: 5,
    alignItems: "center",
  },
});
