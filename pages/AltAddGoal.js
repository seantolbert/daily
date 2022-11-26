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
} from "../components";
import { Auth, db } from "../firebase/config";
import { gStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AltAddGoal = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [weekly, setWeekly] = useState(3);
  const [placeholder, setPlaceholder] = useState("");
  const [daily, setDaily] = useState("");
  const [color, setColor] = useState("fff");
  const [icon, setIcon] = useState("anvil");

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
    // console.log(title);
    // console.log(note);
    // console.log(weekly);
    // console.log(icon);
    // console.log(color);
    // console.log(daily);
  };

  const themeColors = [
    "ffffff",
    "ffeded",
    "ff8787",
    "ff5454",
    "ff2121",
    "ed0000",
    "ffffff",
    "fff8ed",
    "ffd187",
    "ffbd54",
    "ffaa21",
    "ed9200",
    "f6fafe",
    "c7e2fa",
    "98caf6",
    "3b9aed",
    "1581e0",
    "1066b2",
    "0c4c83",
    "f6fef9",
    "c7fad8",
    "98f6b8",
    "3bed77",
    "15e059",
    "10b247",
    "0c8334",
    "fdfbfe",
    "e4cdf9",
    "cb9ff4",
    "9944e9",
    "801ae0",
    "6615b2",
    "4c1084",
  ];

  return (
    <SafeAreaView
      style={[
        gStyles.pageContainer,
        { justifyContent: "flex-start", alignItems: "center" },
      ]}
    >
      <CloseModal nav={navigation} dest="allGoals" title="create new goal" />
      <View
        style={{
          justifyContent: "space-between",
          height: "60%",
          width: "95%",
          alignItems: "center",
        }}
      >
        <InputRow value={title} change={setTitle} label="Title" color={color} />
        <InputRow value={note} change={setNote} label="notes" color={color} />
        <InputRow
          value={placeholder}
          change={setPlaceholder}
          label="placeholder"
          color={color}
        />

        
        <View
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
          <View
            style={{ borderWidth: 2, borderRadius: "50%", borderColor: "#fff" }}
          >
            <View></View>
            <View style={{ padding: 10 }}>
              <MaterialCommunityIcons
                name={icon.toLowerCase()}
                size={30}
                color="#fff"
              />
            </View>
          </View>
          <Text style={{ color: "#fff" }}>reference here</Text>
        </View>
        {/* <InputRow
          custWidth='45%'
          value={icon}
          change={setIcon}
          label=""
          color={color}
        /> */}
        <NumInputRow
          title="weekly commit"
          daily={daily}
          value={weekly}
          change={setWeekly}
        />

        <View style={styles.custInputContainer}>
          <ColorPicker
            color={color}
            show={show}
            setShow={setShow}
            custWidth="45%"
          />
          <Checkbox daily={daily} setDaily={setDaily} />
        </View>
        <Submit handler={handleAdd} color={color} />
      </View>

      {/* <Keyboard /> */}

      <Animated.View
        style={{
          width: "95%",
          paddingVertical: 30,
          height: "45%",
          transform: [{ translateY: keyboardAnimation }],
        }}
      >
        {/* <Text style={gStyles.subtitle}>Keyboard</Text> */}
        <View style={{ width: "100%", flexWrap: "wrap" }}>
          {themeColors.map((c, idx) => (
            <Pressable
              onPress={() => {
                setColor(c);
                setShow(false);
              }}
              key={idx}
              style={{
                width: 30,
                height: 30,
                backgroundColor: `#${c}`,
                margin: 10,
              }}
            ></Pressable>
          ))}
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default AltAddGoal;

const styles = StyleSheet.create({
  inputContainer: {
    height: "18%",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  custInputContainer: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-between",
  },
});
