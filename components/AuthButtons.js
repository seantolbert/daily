import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Animated,
} from "react-native";
import { useState, useRef, useEffect } from "react";

const AuthButtons = ({ nav, handleSubmit, color, disable }) => {
  const shadow = useRef(new Animated.Value(1)).current;

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <View style={styles.buttons}>
      <View style={{ marginBottom: 20 }}>
        <Animated.View
          style={{
            position: "absolute",
            width,
            height,
            backgroundColor: `#${color}`,
            transition: [{ translateX: shadow }, { translateY: shadow }],
          }}
        ></Animated.View>
        <Pressable
          style={styles.create}
          disabled={disable}
          onPress={handleSubmit}
          onLayout={(e) => {
            const { width, height } = e.nativeEvent.layout;
            setWidth(width);
            setHeight(height);
          }}
        >
          <Text style={styles.createText}>CREATE ACCOUNT</Text>
        </Pressable>
      </View>
      <Text style={styles.or}>Already have an account?</Text>
      <Pressable onPress={() => nav.navigate("signIn")}>
        <Text style={styles.createText}>LOG IN</Text>
      </Pressable>
    </View>
  );
};
export default AuthButtons;
const styles = StyleSheet.create({
  buttons: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "75%",
  },
  create: {
    backgroundColor: "#000",
    paddingVertical: 15,
  },
  createText: {
    fontWeight: "bold",
    padding: 10,
    letterSpacing: 2,
    fontSize: 15,
    color: "#fff",
  },
  or: {
    color: "#fff",
    fontWeight: "bold",
  },
  login: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
