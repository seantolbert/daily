import { Animated, ScrollView, StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
import { useCollection } from "../hooks/useCollection";
import { useEffect, useState, useRef } from "react";
import LottieView from "lottie-react-native";
import { getWeek, isToday } from "date-fns";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const GoalDash = () => {
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(0);

  const { documents: goals } = useCollection("goals");
  const { documents: acts } = useCollection("activities");

  const dailyCountTotal = (category) => {
    const filteredActs =
      acts && acts.filter((act) => isToday(new Date(act.fullDate)));
    filteredActs.filter((act) => act.category === category);
    return filteredActs;
  };

  console.log(dailyCountTotal("music"));

  const totalActCount = (id) => {
    const filteredActs = acts && acts.filter((act) => act.category === id);
    return filteredActs.length;
  };

  const weeklyActCount = (id) => {
    const filteredActs =
      acts &&
      acts
        .filter(
          (act) => getWeek(new Date(act.fullDate)) === getWeek(new Date())
        )
        .filter((act) => act.category === id);
    return filteredActs.length;
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [acts]);

  useEffect(() => {}, []);

  return (
    <View style={[styles.container]}>
      {loading ? (
        <Text style={gStyles.subtitle}>Loading ...</Text>
      ) : (
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
            // borderWidth: 1,
            borderColor: "#fff",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              height: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "75%",
            }}
          >
            {/* <Text style={gStyles.subtitle}>Daily</Text> */}
            {goals &&
              goals
                // .filter((goal) => goal.daily)
                .map((goal, idx) => (
                  <View
                    key={idx}
                    style={{
                      backgroundColor: `#${goal.color}`,
                      opacity: 0.5,
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      paddingVertical: 1,
                      paddingHorizontal: 5,
                      borderRadius: "10px",
                      margin: 3,
                      borderWidth: 2,
                      borderColor: `#${goal.color}`,
                    }}
                  >
                    <MaterialCommunityIcons
                      name={goal.icon || goal.title.toLowerCase()}
                      size={45}
                      color="#fff"
                    />
                    <View
                      style={{
                        backgroundColor: "#fff",
                        borderWidth: 1,
                        borderColor: "#fff",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        marginHorizontal: 10,
                      }}
                    ></View>
                    {/* <Text style={{ color: "#fff", fontWeight: "bold" }}>
                      {goal.title}
                    </Text> */}
                  </View>
                ))}
          </View>
          <ScrollView contentContainerStyle={styles.weeklyContainer}>
            {/* <Text style={[gStyles.subtitle, { width: "100%" }]}>weekly</Text> */}
            {goals &&
              goals.map((goal, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.goalBox,
                    { width: 82, borderColor: `#${goal.color}` },
                  ]}
                >
                  {/* <Text style={gStyles.subtitle}>{goal.title}</Text> */}

                  <View>
                    <View style={{ alignItems: "center" }}>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 20,
                          fontWeight: "bold",
                          color: `#${goal.color}`,
                          width: "100%",

                          // height: 60
                        }}
                      >
                        {/* 100% */}
                        {Math.round(
                          (weeklyActCount(goal.id) / goal.weekly) * 100
                        ) + "%"}
                      </Text>
                      {/* <Text style={{ color: "#fff" }}>
                          {weeklyActCount(goal.id)} / {goal.weekly}
                        </Text> */}
                    </View>
                  </View>
                  <MaterialCommunityIcons
                    name={goal.icon || goal.title.toLowerCase()}
                    size={35}
                    color="#fff"
                    // style={{paddingLeft: 10}}
                  />
                </View>
              ))}
          </ScrollView>
        </View>
      )}
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
  weeklyContainer: {
    height: "100%",
    // width: "25%",
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  goalBox: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    // borderWidth: 8,//
    padding: 1,
    borderRadius: "10px",
  },
});
