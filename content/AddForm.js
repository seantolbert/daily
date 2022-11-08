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
import { useAuthContext } from "../hooks/useAuthContext";

const palette = [
  "FCEF04",
  "F7D21D",
  "F1B536",
  "EC9850",
  "E77B69",
  "E15E82",
  "DC419B",
];

const AddForm = ({ setShow, show }) => {
  const [text, setText] = useState("");
  const [inputWidth, setInputWidth] = useState(0);
  const [inputHeight, setInputHeight] = useState(0);
  const { user } = useAuthContext();

  const date = new Date().toDateString();
  const time = new Date().toTimeString();

  const focusRef = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    Animated.timing(focusRef, {
      useNativeDriver: true,
      toValue: 5,
      duration: 500,
    }).start();
  };

  const handleSubmit = async () => {
    const ref = collection(db, "activities");
    await addDoc(ref, {
      text,
      date,
      time,
      uid: user.uid,
      owner: user.email
    });
    setText("");
    setShow(false);
  };

  const { input, colorDot, colorPicker } = styles;

  return (
    <Modal animationType="slide" visible={show}>
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <Pressable
          onPress={() => setShow(!show)}
          style={{ width: "100%", alignItems: "flex-end", padding: 10 }}
        >
          <AntDesign name="closecircleo" size={40} color="black" />
        </Pressable>
        <Text>Whadidja doo</Text>
        <View style={{ marginTop: 50 }}>
          <Animated.View
            style={{
              width: inputWidth,
              height: inputHeight,
              backgroundColor: "#d2d2d2",
              position: "absolute",
              transform: [{ translateX: focusRef }, { translateY: focusRef }],
            }}
          ></Animated.View>

          <TextInput
            autoCapitalize="sentences"
            autoFocus={true}
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
        <View style={colorPicker}>
          {palette.map((c, idx) => (
            <Pressable
              key={idx}
              style={[colorDot, { backgroundColor: `#${c}` }]}
            ></Pressable>
          ))}
        </View>
        <View>
          <Pressable onPress={handleSubmit}>
            <Text>Submit</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
export default AddForm;

const styles = StyleSheet.create({
  input: {
    paddingVertical: 20,
    // paddingHorizontal: 5,
    textAlignVertical: "top",
    minWidth: "90%",
    fontSize: 20,
    backgroundColor: "#fff",
    borderColor: "#828282",
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  colorPicker: {
    width: "100%",
    paddingVertical: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  colorDot: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
    borderRadius: "50%",
  },
});
