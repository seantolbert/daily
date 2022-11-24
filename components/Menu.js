import { StyleSheet, Text, View, Pressable } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

const Menu = ({ nav, selected }) => {
  const menuItems = [
    {
      icon: <FontAwesome5 name="home" size={24} color="#fff" />,
      dest: "main",
    },
    {
      icon: <FontAwesome5 name="calendar-alt" size={24} color="#fff" />,
      dest: "monthView",
    },
    {
      icon: <FontAwesome5 name="plus" size={24} color="#fff" />,
      dest: "addAct",
    },
    {
      icon: <FontAwesome5 name="trophy" size={24} color="#fff" />,
      dest: "allGoals",
    },
    {
      icon: <FontAwesome5 name="user-alt" size={24} color="#fff" />,
      dest: "profile",
    },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item, idx) => (
        <Pressable key={idx} onPress={() => nav.navigate(item.dest)}>
          {item.icon}
        </Pressable>
      ))}
    </View>
  );
};
export default Menu;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    // backgroundColor: "#474747",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    // position: "absolute",
    bottom: 0,
  },
});
