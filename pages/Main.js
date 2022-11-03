import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AddButton from "../components/AddButton";
import Title from "../components/Title";
import { globalStyles } from "../styles/global";
import AddForm from "./AddForm";
import { useState } from "react";

const Main = ({ navigation }) => {
  const [show, setShow] = useState(true);

  return (
    <SafeAreaView style={globalStyles.pageContainer}>
      <Title />
      <AddButton nav={navigation} show={show} setShow={setShow} />
      <AddForm show={show} setShow={setShow} />
    </SafeAreaView>
  );
};
export default Main;
// const styles = StyleSheet.create({

// });
