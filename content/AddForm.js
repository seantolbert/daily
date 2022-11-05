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

import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

import { useState, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import Menu from "../components/Menu";

const AddForm = ({ setShow, show }) => {
  const [text, setText] = useState("");
  const [inputWidth, setInputWidth] = useState(0);
  const [inputHeight, setInputHeight] = useState(0);

  const focusRef = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    Animated.timing(focusRef, {
      useNativeDriver: true,
      toValue: 5,
      duration: 500,
    });
  };

  const handleSubmit = async () => {
    const ref = collection(db, "activities");
    await addDoc(ref, {
      text,
    });
    setText("");
    setShow(false);
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
          <Animated.View
            ref={focusRef}
            style={{
              width: inputWidth,
              height: inputHeight,
              backgroundColor: "#000",
              position: "absolute",
              transform: [{ translateX: focusRef }, { translateY: focusRef }],
            }}
          ></Animated.View>

          <TextInput
            autoCapitalize="sentences"
            // autoFocus={true}
            onFocus={handleFocus}
            multiline={true}
            keyboardAppearance="light"
            placeholder="thoughts?"
            value={text}
            numberOfLines={10}
            onChangeText={setText}
            onLayout={(e) => {
              let { width, height } = e.nativeEvent.layout;
              setInputWidth(width);
              setInputHeight(height);
            }}
            textAlignVertical="top"
            style={input}
          />
        </View>
        <View>
          <Pressable onPress={handleSubmit}>
            <Text>Submit</Text>
          </Pressable>
        </View>
      </SafeAreaView>
      {/* <Menu /> */}
    </Modal>
  );
};
export default AddForm;

const styles = StyleSheet.create({
  input: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    textAlignVertical: "top",
    minWidth: "90%",
    fontSize: 20,
    backgroundColor: "#fff",
  },
});
