import { StyleSheet, Pressable, SafeAreaView, View, Text } from "react-native";
import { BackButton, GoalList, Menu } from "../components";
import { gStyles } from "../styles/global";
import { FontAwesome5 } from "@expo/vector-icons";
import GoalView from "../pages/GoalView";
import AltMenu from "../components/AltMenu";
import { useState } from "react";

const AllGoals = ({ navigation, route }) => {
  const { goal } = route.params;

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} title="goals" />

      {/*  */}
      {/* Goal Viewer */}
      <View
        style={{
          width: "95%",
          height: "50%",
          // borderWidth: 1,
          // borderColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GoalView goal={goal} />
      </View>
      {/*  */}

      <GoalList nav={navigation} />

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          right: 10,
          bottom: 100,
          borderColor: "#fff",
          borderWidth: 1,
          padding: 5,
          borderRadius: "20px",
          zIndex: 5,
        }}
        onPress={() => {
          navigation.navigate("addGoal");
        }}
      >
        <FontAwesome5 name="plus" color="#fff" size={20} />
        <Text style={{ color: "#fff", marginLeft: 10 }}>new goal</Text>
      </Pressable>
      <AltMenu nav={navigation} />
    </SafeAreaView>
  );
};
export default AllGoals;
