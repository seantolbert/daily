import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import Title from "../components/Title";
import { gStyles } from "../styles/global";
import { useState } from "react";
import AddButton from "../components/AddButton";
import { LatestPosts, Menu } from "../components";
import { Auth } from "../firebase/config";
import { signOut } from "firebase/auth";
// import { themeContext } from "../context/themeContext";

const Main = ({ navigation }) => {
  const [show, setShow] = useState(false);

  // console.log(themeContext())

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <Title />

      <LatestPosts actCount={3} limit={true} nav={navigation} />

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
      <Button title="dayView" onPress={() => navigation.navigate("dayView")} />

      <Button title="addGoal" onPress={() => navigation.navigate("addGoal")} />

      <Button title="profile" onPress={() => navigation.navigate("profile")} />

      <Text style={gStyles.subtitle}>{Auth.currentUser.displayName}</Text>

      <Button title="logout" onPress={() => signOut(Auth)} />

      <Menu />
    </SafeAreaView>
  );
};
export default Main;
const styles = StyleSheet.create({});
