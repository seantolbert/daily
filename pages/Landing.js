import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Animated, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";

const Landing = ({ navigation }) => {
  const [shadowWidth, setShadowWidth] = useState(0);
  const [shadowHeight, setShadowHeight] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(0);

  const handleTitleShadow = (e) => {
    const { width, height } = e.nativeEvent.layout;
    setShadowWidth(width);
    setShadowHeight(height);
  };

  const handleButtonShadow = (e) => {
    const { width, height } = e.nativeEvent.layout;
    setButtonHeight(height);
    setButtonWidth(width);
  };

  const seizeAnim = useRef(new Animated.Value(-100)).current;
  const theAnim = useRef(new Animated.Value(-100)).current;
  const dailyAnim = useRef(new Animated.Value(100)).current;
  const confetti = useRef(new Animated.Value(0)).current;
  const buttonsAnim = useRef(new Animated.Value(500)).current;
  const shadowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.stagger(200, [
        Animated.timing(seizeAnim, {
          useNativeDriver: true,
          toValue: 0,
          duration: 500,
        }),
        Animated.timing(theAnim, {
          useNativeDriver: true,
          toValue: 0,
          duration: 500,
        }),
        Animated.timing(dailyAnim, {
          useNativeDriver: true,
          toValue: 0,
          duration: 500,
        }),
      ]),
      Animated.parallel([
        // Animated.timing(confetti, {
        //   useNativeDriver: true,
        //   toValue: 1,
        //   duration: 500,
        // }),
        Animated.timing(buttonsAnim, {
          useNativeDriver: true,
          toValue: 0,
          duration: 300,
        }),
      ]),
      Animated.timing(shadowAnim, {
        useNativeDriver: true,
        toValue: 15,
        duration: 400,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Animated.View
          style={{
            width: shadowWidth,
            height: shadowHeight,
            position: "absolute",
            backgroundColor: "#fff",
            transform: [{ translateY: shadowAnim }, { translateX: shadowAnim }],
          }}
        ></Animated.View>
        <Animated.View
          onLayout={(e) => handleTitleShadow(e)}
          style={styles.titleContainer}
        >
          <Animated.Text
            style={[styles.title, { transform: [{ translateY: seizeAnim }] }]}
          >
            seize
          </Animated.Text>
          <Animated.Text
            style={[styles.title, { transform: [{ translateX: theAnim }] }]}
          >
            the
          </Animated.Text>
          <Animated.Text
            style={[styles.title, { transform: [{ translateY: dailyAnim }] }]}
          >
            daily
          </Animated.Text>
        </Animated.View>
      </View>
      <Animated.View
        style={[styles.buttons, { transform: [{ translateX: buttonsAnim }] }]}
      >
        <View>
          <Animated.View
            style={{
              position: "absolute",
              height: buttonHeight,
              width: buttonWidth,
              backgroundColor: "#fff",
              transform: [
                { translateY: shadowAnim },
                { translateX: shadowAnim },
              ],
            }}
          ></Animated.View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("signIn")}
            onLayout={(e) => handleButtonShadow(e)}
          >
            <Text style={styles.text}>Log In</Text>
          </Pressable>
        </View>
        <View>
          <Animated.View
            style={{
              position: "absolute",
              height: buttonHeight,
              width: buttonWidth,
              backgroundColor: "#fff",
              transform: [
                { translateY: shadowAnim },
                { translateX: shadowAnim },
              ],
            }}
          ></Animated.View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("signUp")}
            onLayout={(e) => handleButtonShadow(e)}
          >
            <Text style={styles.text}>Sign Up</Text>
          </Pressable>
        </View>
      </Animated.View>
      <LottieView
        progress={confetti}
        style={{ width: "100%", position: "absolute" }}
        source={require("../assets/confetti.json")}
      />
    </SafeAreaView>
  );
};
export default Landing;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#000",
  },
  titleContainer: {
    overflow: "hidden",
    // borderWidth: 2,
    // borderColor: "white",
    padding: 10,
    backgroundColor: "#000",
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fff",
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    padding: 10,
    // borderWidth: 2,
    // borderColor: "white",
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },

  text: {
    color: "#fff",
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: "bold",
  },
});
