import { addDoc, collection } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import {
  CloseModal,
  ColorPicker,
  InputRow,
  NumInputRow,
  Submit,
  Checkbox,
  ActionButton,
  IconInputRow,
} from "../components";
import { Auth, db } from "../firebase/config";
import { gStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Test = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [weekly, setWeekly] = useState(3);
  const [placeholder, setPlaceholder] = useState("");
  const [daily, setDaily] = useState("");
  const [color, setColor] = useState("fff");
  const [icon, setIcon] = useState("anvil");
  const [tempIcon, setTempIcon] = useState("anvil");

  const keyboardAnimation = useRef(new Animated.Value(1000)).current;

  const [show, setShow] = useState(false);

  useEffect(() => {
    Animated.timing(keyboardAnimation, {
      useNativeDriver: true,
      toValue: 0,
      duration: 400,
    }).start();
    if (!show) {
      Animated.timing(keyboardAnimation, {
        useNativeDriver: true,
        toValue: 1000,
        duration: 400,
      }).start();
    }
  }, [show]);

  const handleAdd = async () => {
    const ref = collection(db, "goals");
    await addDoc(ref, {
      title,
      icon,
      weekly,
      placeholder,
      daily,
      note,
      color,
      uid: Auth.currentUser.uid,
    });
    navigation.navigate("allGoals");
  };

  return (
    <SafeAreaView
      style={[gStyles.pageContainer, { justifyContent: "flex-start" }]}
    >
      <CloseModal title="new goal" dest="allGoals" nav={navigation} />

      <View style={styles.form}>
        <InputRow value={title} change={setTitle} label="Title" color={color} />
        <InputRow value={note} change={setNote} label="notes" color={color} />
        <InputRow
          value={placeholder}
          change={setPlaceholder}
          label="placeholder"
          color={color}
        />
        {/* <View
          style={{
            flexDirection: "row",
            width: "95%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InputRow
            value={icon}
            change={setIcon}
            color={color}
            custWidth="40%"
          />

          <Text style={gStyles.subtitle}>Search</Text>
          <View style={{ borderRadius: "50%", borderColor: "#fff" }}>
            <View style={styles.shadow}></View>
            <MaterialCommunityIcons
              name={icon.toLowerCase()}
              size={70}
              color="#fff"
            />
          </View>
        </View> */}
        <IconInputRow
          tempIcon={tempIcon}
          setTempIcon={setTempIcon}
          setIcon={setIcon}
          color={color}
        />
      </View>
    </SafeAreaView>
  );
};
export default Test;
const styles = StyleSheet.create({
  form: {
    justifyContent: "space-between",
    height: "60%",
    width: "95%",
    alignItems: "center",
  },
});
