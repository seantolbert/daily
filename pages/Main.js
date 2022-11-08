import { StyleSheet, LogBox, Button, SafeAreaView } from "react-native";
import Title from "../components/Title";
import { globalStyles } from "../styles/global";
import AddForm from "../content/AddForm";
import { useState } from "react";
import AddButton2 from "../components/AddButton";
import { LatestPosts } from "../components";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Main = ({ navigation }) => {
  const [show, setShow] = useState(false);

  const { user } = useAuthContext();
  const { logout } = useLogout();


  console.log(user.uid)

  LogBox.ignoreAllLogs();

  return (
    <>
      <SafeAreaView style={globalStyles.pageContainer}>
        <Title />

        <LatestPosts actCount={4} />

        <Button
          title="All activity"
          onPress={() => navigation.navigate("AllActivity")}
        />
        <Button
          title="monthView"
          onPress={() => navigation.navigate("monthView")}
        />
        <Button
          title="register"
          onPress={() => navigation.navigate("register")}
        />
        <Button
          title="logout"
          onPress={() => {
            logout();
            navigation.navigate("register");
          }}
        />

        <AddButton2 nav={navigation} show={show} setShow={setShow} />
        <AddForm show={show} setShow={setShow} />
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
