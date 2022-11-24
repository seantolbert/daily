import { Animated, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
const Loading = ({ navigation }) => {
  const spinner = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(spinner, {
      useNativeDriver: true,
      toValue: 1,
      duration: 5000,
    }).start(() => navigation.navigate("main"));
  }, []);


  return (
    <View style={styles.container}>
      <LottieView
        progress={spinner}
        loop={true}
        // autoplay
        style={{ width: "100%", position: "absolute" }}
        source={require("../assets/rainbow-loader.json")}
      />
    </View>
  );
};
export default Loading;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
});
