import { StyleSheet, View, SafeAreaView, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
  const [placeholder, setPlaceholder] = useState("what did you do?");
  const [icon, setIcon] = useState("bowling");
  const [note, setNote] = useState("");

  const { documents: goals } = useCollection("goals");

  const user = Auth.currentUser;

  const fullDate = new Date().toDateString();
  const dateDay = new Date().getDate();
  const time = new Date().getTime();

  const handleSubmit = async () => {
    const ref = collection(db, "activities");
    await addDoc(ref, {
      actText,
      date: dateDay,
      note,
      fullDate,
      icon,
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
          label={placeholder}
          value={actText}
          change={setActText}
        />
        <InputRow
          color={color}
          label="thoughts?"
          value={note}
          change={setNote}
          multiline
          custWidth="80%"
        />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "95%",
            // justifyContent: "center",
          }}
        >
          {goals &&
            goals.map((goal, idx) => (
              <Pressable
                key={idx}
                onPress={() => {
                  setCategory(goal.id);
                  console.log(goal.id);
                  setColor(goal.color);
                  setPlaceholder(goal.placeholder);
                  setIcon(goal.icon);
                }}
                style={{
                  backgroundColor: `#${goal.color}`,
                  padding: 5,
                  margin: 5,
                  borderRadius: "10px",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name={goal.icon || goal.title.toLowerCase()}
                  size={40}
                  color="#000"
                />
              </Pressable>
            ))}
        </View>
        <Submit handler={handleSubmit} color={color} />
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
    height: "60%",
    justifyContent: "space-evenly",
    // alignItems: "center",
  },
});
