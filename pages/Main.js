import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import Title from "../components/Title";
import { globalStyles } from "../styles/global";
import AddForm from "../content/AddForm";
import { useState } from "react";
import AddButton2 from "../components/AddButton";
import Menu from "../components/Menu";

const Main = ({ navigation }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <SafeAreaView style={globalStyles.pageContainer}>
        <Title />
        <AddButton2 nav={navigation} show={show} setShow={setShow} />
        <AddForm show={show} setShow={setShow} />
        <Button
          title="All activity"
          onPress={() => navigation.navigate("AllActivity")}
        />
        <Button
          title="monthView"
          onPress={() => navigation.navigate("monthView")}
        />
      </SafeAreaView>
    </>
  );
};
export default Main;
// const styles = StyleSheet.create({

// });
