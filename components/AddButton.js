import { StyleSheet, Animated, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState, useRef, useEffect } from "react";

const AddButton = ({ show, setShow, nav }) => {
  const [shadowHeight, setShadowHeight] = useState(0);
  const [shadowWidth, setShadowWidth] = useState(0);

  const shadowAnimation = useRef(new Animated.Value(5)).current;

  const handleShadow = () => {
    Animated.timing(shadowAnimation, {
      toValue: 8,
      useNativeDriver: true,
      duration: 500,
    }).start();
  };

  const { container, plusButton, shadow } = styles;

  return (
    <View style={container}>
      <Animated.View
        style={[
          shadow,
          { width: shadowWidth, height: shadowHeight },
          {
            transform: [
              { translateX: shadowAnimation },
              { translateY: shadowAnimation },
            ],
          },
        ]}
      ></Animated.View>
      <Pressable
        style={plusButton}
        onLongPress={() => nav.navigate('AddForm')}
        onLayout={(e) => {
          let { width, height } = e.nativeEvent.layout;
          setShadowHeight(height);
          setShadowWidth(width);
          handleShadow();
        }}
      >
        <Entypo name="plus" size={24} color="black" style={{ padding: 10 }} />
      </Pressable>
    </View>
  );
};
export default AddButton;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginVertical: 30,
  },

  plusButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#372772",
  },

  shadow: {
    backgroundColor: "#828282",
    position: "absolute",
  },
});
