import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import Title from "../components/Title";
import { globalStyles } from "../styles/global";
import { useEffect, useState } from "react";
import AddButton2 from "../components/AddButton";
import { LatestPosts } from "../components";
import { Auth, db } from "../firebase/config";
import { signOut } from "firebase/auth";
import { themeContext } from "../context/themeContext";
import { doc, getDoc } from "firebase/firestore";

const Main = ({ navigation }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <SafeAreaView style={globalStyles.pageContainer}>
        <Title />

        <LatestPosts actCount={3} limit={true} />

        <Button
          title="All activity"
          onPress={() => navigation.navigate("allActivity")}
        />
        <Button
          title="monthView"
          onPress={() => navigation.navigate("monthView")}
        />
        <Button
          title="allgoals"
          onPress={() => navigation.navigate("allGoals")}
        />

        <Text style={{ color: "#fff" }}>{Auth.currentUser.displayName}</Text>

        <Button title="logout" onPress={() => signOut(Auth)} />

        <AddButton2 nav={navigation} show={show} setShow={setShow} />
      </SafeAreaView>
    </>
  );
};
export default Main;
const styles = StyleSheet.create({
  colorDot: {
    width: 10,
    height: 10,
  },
});
