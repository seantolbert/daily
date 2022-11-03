import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Modal,
  SafeAreaView,
  Keyboard,
  Animated,
  TextInput,
} from "react-native";
// import { globalStyles } from "../styles/global.js";
import { useState, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";

const AddForm = ({ setShow, show }) => {
  const [activityText, setActivityText] = useState("");
  const [inputWidth, setInputWidth] = useState(0);
  const [inputHeight, setInputHeight] = useState(0);

  const focusRef = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    Animated.timing(focusRef, {
      toValue: 5,
      useNativeDriver: true,
      duration: 1000,
    }).start();
  };

  const { input } = styles;

  return (
    <Modal animationType="slide" visible={show}>
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <Pressable
          onPress={() => setShow(!show)}
          style={{ width: "100%", alignItems: "flex-end", padding: 10 }}
        >
          <AntDesign name="closecircleo" size={40} color="black" />
        </Pressable>
        <Text>Write your thoughts</Text>
        <View style={{ marginTop: 50 }}>
          <TextInput
            autoCapitalize="sentences"
            // autoFocus={true}
            onFocus={handleFocus}
            multiline={true}
            keyboardAppearance="light"
            placeholder="gimme some thoughts brotherman"
            value={activityText}
            numberOfLines={10}
            onChangeText={(e) => setActivityText(e)}
            onLayout={(e) => {
              let { width, height } = e.nativeEvent.layout;
              setInputWidth(width);
              setInputHeight(height);
            }}
            textAlign="left"
            style={input}
          />
          <Animated.View
            ref={focusRef}
            style={{
              width: inputWidth,
              height: inputHeight,
              backgroundColor: "#000",
              position: "absolute",
              zIndex: -1,
              transform: [{ translateX: focusRef }, { translateY: focusRef }],
            }}
          ></Animated.View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
export default AddForm;

const styles = StyleSheet.create({
  input: {
    paddingVertical: 20,
    // justifyContent: 'center',
    paddingHorizontal: 5,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    fontSize: 20,
    backgroundColor: "#fff",
  },
});
