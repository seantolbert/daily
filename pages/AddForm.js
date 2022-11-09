import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Modal,
  SafeAreaView,
  Animated,
  TextInput,
} from "react-native";

import { Auth, db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

import { useState, useRef } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const palette = [
  "01BEFE",
  "FFDD00",
  "FF7D00",
  "FF006D",
  "ADFF02",
  "8F00FF",
  "828282",
];

const AddForm = ({ setShow, show, navigation }) => {
  const [text, setText] = useState("");
  const [inputWidth, setInputWidth] = useState(0);
  const [inputHeight, setInputHeight] = useState(0);
  const [color, setColor] = useState("828282");
  const user = Auth.currentUser;

  const date = new Date().getDate();
  const time = new Date().getTime();

  const focusRef = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    Animated.timing(focusRef, {
      useNativeDriver: true,
      toValue: 7,
      duration: 500,
    }).start();
  };

  const handleSubmit = async () => {
    const ref = collection(db, "activities");
    await addDoc(ref, {
      text,
      date,
      time,
      color,
      uid: user.uid,
    });
    setText("");
    navigation.navigate("main");
  };

  const { input, colorDot, colorPicker } = styles;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
      }}
    >
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <Pressable
          onPress={() => navigation.navigate("main")}
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
              backgroundColor: `#${color}`,
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
            style={[input, { borderColor: `#${color}` }]}
          />
        </View>
        <View style={colorPicker}>
          {palette.map((c, idx) => (
            <Pressable
              key={idx}
              onPress={() => setColor(c)}
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
    </View>
  );
};
export default AddForm;

const styles = StyleSheet.create({
  input: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    textAlignVertical: "top",
    minWidth: "90%",
    maxWidth: "90%",
    fontSize: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  colorPicker: {
    width: "100%",
    paddingVertical: 50,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  colorDot: {
    width: 30,
    height: 30,
    // marginHorizontal: 10,
    borderRadius: "50%",
  },
});
