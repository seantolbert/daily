import { StyleSheet, Text, LogBox, Button, SafeAreaView } from "react-native";
import Title from "../components/Title";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import AddButton2 from "../components/AddButton";
import { LatestPosts } from "../components";
import { Auth } from "../firebase/config";
import { signOut } from "firebase/auth";

const Main = ({ navigation }) => {
  const [show, setShow] = useState(false);

  // const { logout } = useLogout();

  // console.log(user.uid)

  return (
    <>
      <SafeAreaView style={globalStyles.pageContainer}>
        <Title />

        <LatestPosts actCount={3} limit={true} />

        <Button
          title="All activity"
          onPress={() => navigation.navigate("AllActivity")}
        />
        <Button
          title="monthView"
          onPress={() => navigation.navigate("monthView")}
        />
        <Button title="logout" onPress={() => signOut(Auth)} />

        <Text>{Auth.currentUser.displayName}</Text>

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
