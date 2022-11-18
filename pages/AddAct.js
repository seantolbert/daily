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
  const [icon, setIcon] = useState("none");
  const user = Auth.currentUser;

  const date = new Date().getDate();
  const time = new Date().getTime();

  const handleSubmit = async () => {
    const ref = collection(db, "activities");
    await addDoc(ref, {
      actText,
      date,
      time,
      icon,
      color,
      uid: user.uid,
    });
    setActText("");
    navigation.navigate("main");
  };

  return (
    <SafeAreaView style={styles.container}>
      <CloseModal nav={navigation} />
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
        <IconSelector selected={icon} setSelected={setIcon} />
        <AddActColorPicker setColor={setColor} />
        <Submit handleSubmit={handleSubmit} />
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
