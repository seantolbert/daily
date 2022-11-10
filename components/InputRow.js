import { useState, useRef } from "react";
import { StyleSheet, TextInput, View, Animated } from "react-native";

const InputRow = ({ value, color, change, label, secret }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  let initialState;
  const shadow = useRef(new Animated.Value(!!initialState ? 10 : 1)).current;

  const handleFocus = () => {
    Animated.timing(shadow, {
      useNativeDriver: true,
      toValue: 10,
      duration: 300,
    }).start();
  };
  const handleBlur = () => {
    Animated.timing(shadow, {
      useNativeDriver: true,
      toValue: 1,
      duration: 300,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          backgroundColor: `#${color}`,
          width,
          height,
          position: "absolute",
          transform: [{ translateX: shadow }, { translateY: shadow }],
        }}
      ></Animated.View>
      <TextInput
        onChangeText={change}
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
        value={value}
        placeholder={label}
        placeholderTextColor="#fff"
        style={[styles.input, { borderColor: `#${color}` }]}
        secureTextEntry={secret}
        onLayout={(e) => {
          const { width, height } = e.nativeEvent.layout;
          setWidth(width);
          setHeight(height);
        }}
      />
    </View>
  );
};
export default InputRow;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "100%",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: "#fff",
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#000",
  },
});
