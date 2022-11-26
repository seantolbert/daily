import { StyleSheet, Text, View, Animated } from "react-native";
import { gStyles } from "../styles/global";
import { useState, useEffect, useRef } from "react";

const AddGoal = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [weekly, setWeekly] = useState(3);
  const [placeholder, setPlaceholder] = useState("");
  const [daily, setDaily] = useState("");
  const [color, setColor] = useState("fff");
  const [icon, setIcon] = useState("anvil");

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
    <View style={gStyles.pageContainer}>
      <Text style={{ color: "#fff" }}>AddGoal</Text>
    </View>
  );
};
export default AddGoal;
const styles = StyleSheet.create({});
