import { StyleSheet, Text, View, Animated, Pressable } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";

const Menu = ({ nav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [menuWidth, setMenuWidth] = useState(0);

  const addAct = useRef(new Animated.Value(0)).current;
  const monthView = useRef(new Animated.Value(0)).current;
  const allGoals = useRef(new Animated.Value(0)).current;
  const profile = useRef(new Animated.Value(0)).current;
  const settings = useRef(new Animated.Value(0)).current;
  const main = useRef(new Animated.Value(0)).current;
  const menuIcon = useRef(new Animated.Value(0)).current;
  // const closeIcon = useRef(new Animated.Value(-500)).current;

  // helper function for measuring distance of menuitem from menu corner
  // the last number is the distance between each menu item
  const openState = (order) => -(order * height) - order * 15;

  const handleOpen = () => {
    isOpen
      ? Animated.parallel([
          Animated.timing(settings, {
            useNativeDriver: true,
            toValue: openState(1),
            duration: 400,
          }).start(),
          Animated.timing(profile, {
            useNativeDriver: true,
            toValue: openState(2),
            duration: 400,
          }),
          Animated.timing(allGoals, {
            useNativeDriver: true,
            toValue: openState(1),
            duration: 400,
          }),
          Animated.timing(addAct, {
            useNativeDriver: true,
            toValue: openState(2),
            duration: 400,
          }),
          Animated.timing(monthView, {
            useNativeDriver: true,
            toValue: openState(3),
            duration: 400,
          }),
          Animated.timing(main, {
            useNativeDriver: true,
            toValue: openState(4),
            duration: 400,
          }),

          // menuAnmimation

          Animated.timing(menuIcon, {
            useNativeDriver: true,
            toValue: -menuWidth / 2,
            duration: 400,
          }),
        ]).start()
      : Animated.parallel([
          Animated.timing(settings, {
            useNativeDriver: true,
            toValue: 0,
            duration: 400,
          }),
          Animated.timing(profile, {
            useNativeDriver: true,
            toValue: 0,
            duration: 400,
          }),
          Animated.timing(allGoals, {
            useNativeDriver: true,
            toValue: 0,
            duration: 400,
          }),
          Animated.timing(addAct, {
            useNativeDriver: true,
            toValue: 0,
            duration: 400,
          }),
          Animated.timing(monthView, {
            useNativeDriver: true,
            toValue: 0,
            duration: 400,
          }),
          Animated.timing(main, {
            useNativeDriver: true,
            toValue: 0,
            duration: 400,
          }),

          // menuAnimation

          Animated.timing(menuIcon, {
            useNativeDriver: true,
            toValue: 0,
            duration: 400,
          }),
        ]).start();
  };


  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.buttonContainer, { transform: [{ translateX: main }] }]}
      >
        <Pressable style={styles.button} onPress={() => nav.navigate("main")}>
          <Ionicons name="ios-home-sharp" size={35} color="#fff" />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ translateX: monthView }] },
        ]}
      >
        <Pressable
          style={styles.button}
          onPress={() => nav.navigate("monthView")}
        >
          <EvilIcons name="calendar" size={55} color="white" />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ translateX: addAct }] },
        ]}
      >
        <Pressable style={styles.button} onPress={() => nav.navigate("addAct")}>
          <EvilIcons name="pencil" size={55} color="white" />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ translateX: allGoals }] },
        ]}
      >
        <Pressable
          style={styles.button}
          onPress={() => nav.navigate("allGoals")}
        >
          <EvilIcons name="trophy" size={55} color="white" />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ translateY: profile }] },
        ]}
      >
        <Pressable
          style={styles.button}
          onPress={() => nav.navigate("profile")}
        >
          <EvilIcons name="user" size={55} color="white" />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ translateY: settings }] },
        ]}
      >
        <Pressable
          style={styles.button}
          onPress={() => nav.navigate("settings")}
        >
          <EvilIcons name="gear" size={55} color="white" />
        </Pressable>
      </Animated.View>
      <Animated.View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            setIsOpen(!isOpen);
            handleOpen();
          }}
          style={[styles.button, { overflow: "hidden" }]}
          onLayout={(e) => {
            const { width, height } = e.nativeEvent.layout;
            setWidth(width);
            setHeight(height);
          }}
        >
          <Animated.View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              transform: [{ translateX: menuIcon }],
            }}
            onLayout={(e) => {
              const { width } = e.nativeEvent.layout;
              setMenuWidth(width);
            }}
          >
            <EvilIcons name="navicon" size={55} color="white" />
            <EvilIcons name="close" size={55} color="white" />
          </Animated.View>
        </Pressable>
      </Animated.View>
    </View>
  );
};
export default Menu;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    height: 80,
  },
  buttonContainer: {
    margin: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#000",
    borderRadius: "50%",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
