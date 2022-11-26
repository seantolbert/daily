import { StyleSheet, View, SafeAreaView } from "react-native";
import { Auth, db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { AddActGoalList, CloseModal, InputRow, Submit } from "../components";

const AddAct = ({ navigation }) => {
  const [actText, setActText] = useState("");
  const [color, setColor] = useState("fff");
  const [category, setCategory] = useState("none");
  const [placeholder, setPlaceholder] = useState("what did you do?");
  const [icon, setIcon] = useState("bowling");
  const [note, setNote] = useState("");

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
      <CloseModal nav={navigation} title="new act" dest="main" />
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

        <AddActGoalList
          setCategory={setCategory}
          setIcon={setIcon}
          setPlaceholder={setPlaceholder}
          setColor={setColor}
        />

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
  },
});
