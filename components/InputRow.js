import { useState, useRef } from "react";
import { StyleSheet, TextInput, View, Animated } from "react-native";

const InputRow = ({
  value,
  color,
  change,
  label,
  secret,
  custWidth,
  multiline,
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  let initialState;
  const shadow = useRef(new Animated.Value(!!initialState ? 10 : 2)).current;

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
      toValue: 2,
      duration: 300,
    }).start();
  };

  return (
    <View
      style={[styles.container, { width: custWidth ? `${custWidth}%` : "95%" }]}
    >
      <Animated.View
        style={{
          backgroundColor: `#${color}`,
          width,
          height,
          position: "absolute",
          transform: [{ translateX: shadow }, { translateY: shadow }],
          borderRadius: "10px",
        }}
      ></Animated.View>
      <TextInput
        onChangeText={change}
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
        value={value}
        placeholder={label}
        placeholderTextColor="#fff"
        style={[
          styles.input,
          { borderColor: `#${color}`, height: multiline ? 'auto' : 50 },
        ]}
        secureTextEntry={secret}
        onLayout={(e) => {
          const { width, height } = e.nativeEvent.layout;
          setWidth(width);
          setHeight(height);
        }}
        multiline={multiline ? true : false}
      />
    </View>
  );
};
export default InputRow;
const styles = StyleSheet.create({
  container: {
    // paddingVertical: 20,
    alignItems: "center",
  },
  input: {
    minHeight: 50,
    width: "100%",
    borderColor: "#fff",
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#000",
    borderRadius: "10px",
  },
});
