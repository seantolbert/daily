import { StyleSheet, Text, View, Animated, Pressable } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const monthView = useRef(new Animated.Value(0)).current;

  const addAct = useRef(new Animated.Value(0)).current;
  const allGoals = useRef(new Animated.Value(0)).current;
  const profile = useRef(new Animated.Value(0)).current;
  const settings = useRef(new Animated.Value(0)).current;

  // helper function for measuring distance of menuitem from menu corner
  const openState = (order) => -(order * height) - order * 10;

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
        ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ translateX: monthView }] },
        ]}
      >
        <Pressable style={styles.button}>
          <EvilIcons name="calendar" size={30} color="black" />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ translateX: addAct }] },
        ]}
      >
        <Pressable style={styles.button}>
          <EvilIcons name="pencil" size={30} color="black" />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ translateX: allGoals }] },
        ]}
      >
        <Pressable style={styles.button}>
          <EvilIcons name="trophy" size={30} color="black" />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ translateY: profile }] },
        ]}
      >
        <Pressable style={styles.button}>
          <EvilIcons name="user" size={30} color="black" />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ translateY: settings }] },
        ]}
      >
        <Pressable style={styles.button}>
          <EvilIcons name="gear" size={30} color="black" />
        </Pressable>
      </Animated.View>
      <Animated.View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            setIsOpen(!isOpen);
            handleOpen();
          }}
          style={styles.button}
          onLayout={(e) => {
            const { width, height } = e.nativeEvent.layout;
            setWidth(width);
            setHeight(height);
          }}
        >
          <EvilIcons name="navicon" size={30} color="black" />
        </Pressable>
      </Animated.View>
      {/* </View> */}
    </View>
  );
};
export default Menu;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
    padding: 15,
  },
  buttonContainer: {
    margin: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
