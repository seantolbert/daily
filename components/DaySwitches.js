import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { isToday } from "date-fns";
import { gStyles } from "../styles/global";

const DaySwitches = ({ goals, acts, nav }) => {
  const getDaily = (id) => {
    const filteredActs =
      acts &&
      acts
        .filter((act) => act.category === id)
        .filter((act) => isToday(new Date(act.fullDate)));
    return filteredActs.length;
  };

  return (
    <View style={[styles.container, {width: goals.length > 0 ? '75%' : '95%'}]}>
      {goals && goals.length > 0 ? (
        goals.map((goal, idx) => (
          <Pressable
            onPress={() =>
              nav.navigate("allGoals", {
                goal,
              })
            }
            key={idx}
            style={[
              styles.daySwitch,
              {
                backgroundColor: getDaily(goal.id) > 0 ? goal.color : "#000",
                borderColor: goal.color,
              },
            ]}
          >
            <MaterialCommunityIcons
              name={goal.icon || goal.title.toLowerCase()}
              size={45}
              color="#fff"
            />
            <View
              style={[
                styles.dot,
                { backgroundColor: getDaily(goal.id) > 0 ? "#fff" : "" },
              ]}
            ></View>
          </Pressable>
        ))
      ) : (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Text style={[gStyles.subtitle, {textAlign: 'center'}]}>
            Add some goals by clicking on the trophy in the menu
          </Text>
        </View>
      )}
    </View>
  );
};
export default DaySwitches;
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    // width: "75%",
    // borderColor: '#fff', 
    // borderWidth: 1,
  },
  daySwitch: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: "10px",
    margin: 3,
    width: "30%",
    borderWidth: 2,
  },
  dot: {
    borderWidth: 1,
    borderColor: "#fff",
    width: 10,
    height: 10,
    borderRadius: "50%",
    marginHorizontal: 10,
  },
});
