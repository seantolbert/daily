import { StyleSheet, Pressable, SafeAreaView, View, Text } from "react-native";
import { ActionButton, BackButton, GoalList, Menu } from "../components";
import { gStyles } from "../styles/global";
import { FontAwesome5 } from "@expo/vector-icons";
import GoalView from "../pages/GoalView";
import AltMenu from "../components/AltMenu";
import { useState } from "react";

const AllGoals = ({ navigation }) => {
  const [goal, setGoal] = useState(null);

  // create a view screen component on top half of AllGoals page
  // the second half of the screen will be like a
  // selector for which goal's stats are betting viewed

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} title="goals" />

      {/*  */}
      {/* Goal Viewer */}
      <View
        style={{
          width: "95%",
          height: "50%",
          borderWidth: 1,
          borderColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GoalView goal={goal} />
      </View>
      {/*  */}

      {/* GoalKeyboard */}
      <GoalList nav={navigation} setGoal={setGoal} />
      {/*  */}

      {/*  */}
      {/* Add, update, delete, toolbar */}
      {/* <ActionButton nav={navigation} dest="addGoal" icon="plus" /> */}
      {/* update button */}
      {/* delete button */}
      {/*  */}
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
          zIndex: 5
        }}
        onPress={() =>{
          navigation.navigate("addGoal")
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
