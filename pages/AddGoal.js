import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { CloseModal, ColorPicker, InputRow, Menu } from "../components";
import { gStyles } from "../styles/global";
import EmojiSelector, { Categories } from "react-native-emoji-selector";

const AddGoal = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [weekly, setWeekly] = useState(0);
  const [icon, setIcon] = useState(null);
  const [color, setColor] = useState("");

  console.log("icon: ", icon);

  return (
    <SafeAreaView
      style={[gStyles.pageContainer, { justifyContent: "flex-start" }]}
    >
      <CloseModal nav={navigation} />
      <InputRow value={title} change={setTitle} label="Title" color="fff" />
      <InputRow
        value={weekly}
        change={setWeekly}
        label="weeklyGoal"
        color="fff"
      />
      <ColorPicker />

      <EmojiSelector
        category={Categories.activities}
        onEmojiSelected={(emoji) => setIcon(emoji)}
        columns={5}
        placeholder="Icon"
        theme="000"
      />
    </SafeAreaView>
  );
};
export default AddGoal;
const styles = StyleSheet.create({});
