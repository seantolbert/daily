import { addDoc, collection } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { CloseModal, InputRow, NumInputRow, Submit } from "../components";
import { Auth, db } from "../firebase/config";
import { gStyles } from "../styles/global";
import ColorSwitch from "../components/ColorSwitch";
import IconSwitch from "../components/IconSwitch";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Keyboard from "../components/Keyboard";

const AddGoal = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [weekly, setWeekly] = useState(3);
  const [placeholder, setPlaceholder] = useState("");
  const [hasDaily, setHasDaily] = useState("");
  const [hasWeekly, setHasWeekly] = useState("");
  const [daily, setDaily] = useState(1);
  const [color, setColor] = useState("#fff");
  const [icon, setIcon] = useState("");
  const [showColor, setShowColor] = useState(false);

  // console.log(isColor);
  // console.log(show);

  const [show, setShow] = useState(false);

  const keyboardAnimation = useRef(new Animated.Value(1000)).current;

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
    <SafeAreaView style={[gStyles.pageContainer]}>
      <CloseModal title="create a new goal" dest="allGoals" nav={navigation} />
      <View style={styles.form}>
        <InputRow value={title} change={setTitle} label="title" color={color} />
        <InputRow value={note} change={setNote} label="notes" color={color} />
        <InputRow
          value={placeholder}
          change={setPlaceholder}
          label="placeholder"
          color={color}
        />
        <NumInputRow
          title="daily commit"
          value={daily}
          change={setDaily}
          enabled={hasDaily}
          setEnabled={setHasDaily}
        />
        <NumInputRow
          title="weekly commit"
          value={weekly}
          change={setWeekly}
          enabled={hasWeekly}
          setEnabled={setHasWeekly}
        />
        <View style={styles.colorIconCont}>
          <ColorSwitch setShowColor={setShowColor} showColor={showColor} color={color} />
          <IconSwitch color={color} setShow={setShow} show={show} icon={icon} />
        </View>
        <Submit
          color={color}
          showColor={showColor}
          setColor={setColor}
          handler={handleAdd}
        />
      </View>

      <Animated.View
        style={{
          width: "100%",
          height: "30%",
          transform: [{ translateY: keyboardAnimation }],
        }}
      >
        <Keyboard
          setIcon={setIcon}
          keyboardAnimation={keyboardAnimation}
          setColor={setColor}
          // isColor={isColor}
        />
      </Animated.View>
    </SafeAreaView>
  );
};
export default AddGoal;
const styles = StyleSheet.create({
  form: {
    justifyContent: "space-between",
    height: "65%",
    width: "95%",
    alignItems: "center",
  },
  commitCont: {
    alignItems: "center",
    width: "100%",
  },
  colorIconCont: {
    width: "95%",
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
