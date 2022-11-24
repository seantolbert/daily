import { StyleSheet, View, SafeAreaView, Text, Pressable } from "react-native";

import { Auth, db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import {
  AddActColorPicker,
  CloseModal,
  IconSelector,
  InputRow,
  Submit,
} from "../components";
import { useCollection } from "../hooks/useCollection";
import { gStyles } from "../styles/global";

const AddAct = ({ navigation }) => {
  const [actText, setActText] = useState("");
  const [color, setColor] = useState("fff");
  const [category, setCategory] = useState("none");
  const [placeholder, setPlaceholder] = useState('what did you do?')
  const [goalColors, setGoalColors] = useState([]);
  const [goalCategories, setGoalCategories] = useState([]);

  const { documents: goals } = useCollection("goals");

  // useEffect(() => {
  //   // const colors = goals && goals.map((goal) => goal.color);
  //   // const categories = goals && goals.map((goal) => goal.title);
  //   // setGoalColors(colors);
  //   // setGoalCategories(categories);
  // }, [goals]);

  // console.log(goalColors);
  // console.log(goalCategories);

  const user = Auth.currentUser;

  const fullDate = new Date().toDateString();
  const dateDay = new Date().getDate();
  const time = new Date().getTime();

  const handleSubmit = async () => {
    const ref = collection(db, "activities");
    await addDoc(ref, {
      actText,
      date: dateDay,
      fullDate,
      time,
      category,
      color,
      uid: user.uid,
    });
    setActText("");
    navigation.navigate("main");
  };
  return (
    <SafeAreaView style={styles.container}>
      <CloseModal nav={navigation} dest="main" />
      <View style={styles.form}>
        <InputRow
          color={color}
          label="what did you do?"
          value={actText}
          change={setActText}
        />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "95%",
            justifyContent: "space-evenly",
          }}
        >
          {goals &&
            goals.map((goal, idx) => (
              <Pressable
              key={idx}
                onPress={() => {
                  setCategory(goal.id);
                  console.log(goal.id);
                  setColor(goal.color)
                }}
                style={{
                  backgroundColor: `#${goal.color}`,
                  padding: 10,
                  borderRadius: "10px",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>{goal.title}</Text>
              </Pressable>
            ))}
        </View>
        <Submit handler={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};
export default AddAct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#000",
  },
  form: {
    width: "95%",
    height: "40%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
