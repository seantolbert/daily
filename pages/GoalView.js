import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { BackButton, Menu } from "../components";
import { useCollection } from "../hooks/useCollection";
import { gStyles } from "../styles/global";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const GoalView = ({ navigation, route }) => {
  const { goal } = route.params;

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} title={goal.title} />
      <Pressable
        onPress={() => navigation.navigate("addGoal")}
      >
        <MaterialCommunityIcons name="plus" color="#fff" size={30} />
      </Pressable>
      <Text style={gStyles.subtitle}>{goal.placeholder}</Text>
      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default GoalView;
const styles = StyleSheet.create({});
