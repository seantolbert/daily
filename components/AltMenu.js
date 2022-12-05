import { StyleSheet, Text, View, Pressable } from "react-native";

import ActionButton from "./ActionButton";

import { FontAwesome5 } from "@expo/vector-icons";

const AltMenu = ({ nav, selected }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => nav.navigate("main")}>
        <FontAwesome5 name="home" color="#fff" size={25} />
      </Pressable>
      <Pressable onPress={() => nav.navigate("monthView")}>
        <FontAwesome5 name="calendar-alt" color="#fff" size={25} />
      </Pressable>

      <ActionButton nav={nav} dest="addAct" icon="plus" />

      <Pressable onPress={() => nav.navigate("allGoals")}>
        <FontAwesome5 name="trophy" color="#fff" size={25} />
      </Pressable>
      <Pressable onPress={() => nav.navigate("profile")}>
        <FontAwesome5 name="user-alt" color="#fff" size={25} />
      </Pressable>
    </View>
  );
};
export default AltMenu;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
