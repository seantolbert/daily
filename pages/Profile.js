import { signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState, useRef } from "react";
import { Animated, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BackButton, HomeButton, Menu } from "../components";

import { gStyles } from "../styles/global";
const Profile = ({ navigation }) => {
  const items = ["music", "streets", "forgen", "now", "beeerrr "];

  const circleAnimation = useRef(new Animated.Value(0)).current;

  // console.log(`${circleAnimation}deg`);

  const [width, setWidth] = useState(0);
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);

  useEffect(() => {
    Animated.timing(circleAnimation, {
      useNativeDriver: true,
      toValue: 1,
      duration: 4000,
    }).start();
  }, []);

  const spin = circleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "144deg"],
  });

  const boxSpin = circleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-144deg"],
  });

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} title="profile" />

      <View style={{ width: "95%", alignItems: "center" }}>
        <Text style={gStyles.subtitle}>
          Carosel Demo in progress showing profile menu options
        </Text>
      </View>

      <Animated.View
        style={[styles.circle, { transform: [{ rotate: spin }] }]}
        onLayout={(e) => {
          const { width } = e.nativeEvent.layout;
          setWidth(width);
        }}
      >
        <Animated.View
          style={[
            styles.box,
            {
              // backgroundColor: "red",
              transform: [
                { translateY: -boxHeight / 2 - 5 },
                { translateX: (width - boxWidth) / 2 },
                { rotate: boxSpin },
              ],
            },
          ]}
          onLayout={(e) => {
            const { width, height } = e.nativeEvent.layout;
            setBoxWidth(width);
            setBoxHeight(height);
          }}
        >
          <View style={styles.dot}></View>
        </Animated.View>

        <Animated.View
          style={[
            styles.box,
            {
              // backgroundColor: "lightblue",
              transform: [
                { translateX: -(boxWidth / 2) + 5 },
                { translateY: (width - boxHeight) * 0.38 - boxHeight * 0.38 },
                { rotate: boxSpin },
              ],
            },
          ]}
        >
          <View style={styles.dot}></View>
        </Animated.View>

        <Animated.View
          style={[
            styles.box,
            {
              // backgroundColor: "gold",
              transform: [
                { translateY: (width - boxHeight) * 0.38 - boxHeight * 0.38 },
                { translateX: width - boxWidth - 5 + boxWidth / 2 },
                { rotate: boxSpin },
              ],
            },
          ]}
        >
          <View style={styles.dot}></View>
        </Animated.View>

        <Animated.View
          style={[
            styles.box,
            {
              // backgroundColor: "turquoise",
              transform: [
                { translateY: width - boxHeight + 10 },
                { translateX: width - boxWidth - (-boxWidth / 2) * 0.18 },
                { rotate: boxSpin },
              ],
            },
          ]}
        >
          <View style={styles.dot}></View>
        </Animated.View>
        <Animated.View
          style={[
            styles.box,
            {
              // backgroundColor: "teal",
              transform: [
                { translateY: width - boxHeight + 10 },
                { translateX: (-boxWidth / 2) * 0.18 },
                { rotate: boxSpin },
              ],
            },
          ]}
        >
          <View style={styles.dot}></View>
        </Animated.View>
      </Animated.View>

      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  circle: {
    width: 250,
    height: 250,
    borderRadius: 300 / 2,
    borderColor: "lightgreen",
    borderWidth: 0.2,
  },

  box: {
    width: 130,
    height: 100,
    borderColor: "#fff",
    borderWidth: 5,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },
  dot: {
    borderRadius: "50%",
    backgroundColor: "#fff",

    width: 10,
    height: 10,
  },
});
