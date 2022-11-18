import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
import { useCollection } from "../hooks/useCollection";
import { useState } from "react";

const GoalDash = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const { documents: goals } = useCollection("goals");

  return (
    <View style={styles.container}>
      {/* <Text style={gStyles.subtitle}>Weekly Goals</Text> */}
      <View
        style={styles.dashContainer}
        onLayout={(e) => {
          const { width, height } = e.nativeEvent.layout;
          setWidth(width);
          setHeight(height);
        }}
      >
        {goals &&
          goals.map((goal, idx) => (
            <View
              key={idx}
              style={[
                styles.goalBox,
                {
                  width: width / 2,
                  height: height / 2,
                  padding: 5,
                  borderWidth: 2,
                  borderColor: "#fff",
                },
              ]}
            >
              <Text
                style={[
                  gStyles.subtitle,
                  {
                    // borderWidth: 2,
                    borderColor: "#fff",
                    height: "100%",
                    width: "100%",
                    borderRadius: "20%",
                    alignItems: "center",
                    justify: "center",
                  },
                ]}
              >
                {goal.title}
              </Text>
            </View>
          ))}
      </View>
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
  dashContainer: {
    // borderWidth: 2,
    borderColor: "#fff",
    height: "100%",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    gap: "10px",
  },
  goalBox: {
    // borderWidth: 1,
    // borderColor: "#fff",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
  },
});
