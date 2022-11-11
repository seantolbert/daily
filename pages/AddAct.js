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
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const palette = [
  "01BEFE",
  "FFDD00",
  "FF7D00",
  "FF006D",
  "ADFF02",
  "8F00FF",
  "828282",
];

const AddAct = ({ navigation }) => {
  const [text, setText] = useState("");
  const [inputWidth, setInputWidth] = useState(0);
  const [inputHeight, setInputHeight] = useState(0);
  const [color, setColor] = useState("828282");
  const [selected, setSelected] = useState();
  const [canSubmit, setCanSubmit] = useState(false)

  const user = Auth.currentUser;

  const date = new Date().getDate();
  const time = new Date().getTime();

  // const date = `${day} ${month} ${year}`

  const focusRef = useRef(new Animated.Value(0)).current;

  const icons = [
    <MaterialCommunityIcons name="weight-lifter" size={24} color="white" />,
    <MaterialCommunityIcons name="water" size={24} color="white" />,
    <MaterialCommunityIcons name="music" size={24} color="white" />,
    <MaterialCommunityIcons name="briefcase" size={24} color="white" />,
    <MaterialCommunityIcons name="account-plus" size={24} color="white" />,
    <MaterialCommunityIcons
      name="human-greeting-proximity"
      size={24}
      color="white"
    />,
    <MaterialCommunityIcons name="dog-side" size={24} color="white" />,
    <MaterialCommunityIcons name="food-apple" size={24} color="white" />,
  ];

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
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#000",
      }}
    >
      <Pressable
        onPress={() => navigation.navigate("main")}
        style={{ width: "100%", alignItems: "flex-end", padding: 10 }}
      >
        <AntDesign name="closecircleo" size={40} color="#fff" />
      </Pressable>
      <Text style={{ color: "#fff" }}>Whadidja doo</Text>
      <View
        style={{
          marginTop: 50,
          marginVertical: 20,
        }}
      >
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
          placeholder="what did you do?"
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

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {icons.map((icon, idx) => (
          <Pressable
            key={idx}
            onPress={() => setSelected(!selected)}
            style={{
              borderColor: "#fff",
              borderWidth: selected ? 2 : 0,
              borderRadius: "50%",
              padding: 5,
            }}
          >
            {icon}
          </Pressable>
        ))}
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
        <Pressable
          onPress={handleSubmit}
          style={{ borderWidth: 2, borderColor: "white" }}
        >
          <Text style={{ color: "#fff", padding: 10 }}>Submit</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default AddAct;

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
    paddingVertical: 20,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  colorDot: {
    width: 30,
    height: 30,
    borderRadius: "50%",
  },
});
