import { StyleSheet, View, SafeAreaView } from "react-native";

import { Auth, db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import {
  AddActColorPicker,
  CloseModal,
  IconSelector,
  InputRow,
  Submit,
} from "../components";

const AddAct = ({ navigation }) => {
  const [actText, setActText] = useState("");
  const [color, setColor] = useState("fff");
  const [category, setCategory] = useState("none");
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
    navigation.navigate("dayView");
  };
  return (
    <SafeAreaView style={styles.container}>
      <CloseModal nav={navigation} dest='dayView'/>
      <View style={styles.form}>
        <View>
          <InputRow
            color={color}
            label="what did you do?"
            value={actText}
            change={setActText}
          />
          <View></View>
        </View>
        <IconSelector category={category} setCategory={setCategory} />
        <AddActColorPicker setColor={setColor} />
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
  },
});
