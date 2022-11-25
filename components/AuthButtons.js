import { StyleSheet, Text, View, Animated, Pressable } from "react-native";
import { useState, useEffect, useRef } from "react";
import { gStyles } from "../styles/global";

const AuthButtons = ({
  handler,
  email,
  password,
  displayName,
  confirm,
  navLabel,
  dest,
  nav,
  label,
  isMember,
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const shadowAnim = useRef(new Animated.Value(2)).current;

  useEffect(() => {
    isMember
      ? // sign in error handling
        email.split("").includes("@") && password.length > 4
        ? Animated.timing(shadowAnim, {
            useNativeDriver: true,
            toValue: 10,
            duration: 400,
          }).start()
        : Animated.timing(shadowAnim, {
            useNativeDriver: true,
            toValue: 2,
            duration: 400,
          }).start()
      : // sign up error handling
      displayName.length > 4 &&
        email.split("").includes("@") &&
        password.length > 4 &&
        password === confirm
      ? Animated.timing(shadowAnim, {
          useNativeDriver: true,
          toValue: 10,
          duration: 400,
        }).start()
      : Animated.timing(shadowAnim, {
          useNativeDriver: true,
          toValue: 2,
          duration: 400,
        }).start();
  }, [email, password, confirm, displayName]);

  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={() => nav.navigate(dest)}>
          <Text style={gStyles.subtitle}>{navLabel}</Text>
        </Pressable>
      </View>
      <View>
        <Animated.View
          style={[
            styles.shadow,
            {
              width,
              height,
              transform: [
                { translateX: shadowAnim },
                { translateY: shadowAnim },
              ],
            },
          ]}
        ></Animated.View>
        <Pressable
          style={styles.login}
          onPress={handler}
          onLayout={(e) => {
            const { width, height } = e.nativeEvent.layout;
            setWidth(width);
            setHeight(height);
          }}
        >
          <Text style={gStyles.subtitle}>{label}</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default AuthButtons;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  login: {
    padding: 15,
    borderRadius: "10px",
    backgroundColor: "#000",
  },
  shadow: {
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: "10px",
  },
});
