import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import { AuthButtons, BackButton, ColorPicker, InputRow } from "../components";
import { useRegister } from "../hooks/useRegister";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [themeColor, setThemeColor] = useState("fff");

  const { signup } = useRegister();

  const handleSubmit = () => {
    signup(email, password, displayName, themeColor);
  };

  const disable = password !== confirm;

  return (
    <SafeAreaView style={styles.container}>
      <BackButton nav={navigation} dest="landing" />
      <Text style={[styles.title, { color: `#${themeColor}` }]}>
        CREATE AN ACCOUNT
      </Text>
      <KeyboardAvoidingView style={styles.form}>
        <InputRow
          value={displayName}
          color={themeColor}
          change={setDisplayName}
          label="username"
        />
        <InputRow
          value={email}
          color={themeColor}
          change={setEmail}
          label="email"
        />
        <InputRow
          value={password}
          color={themeColor}
          change={setPassword}
          label="password"
          secret
        />
        <InputRow
          value={confirm}
          color={themeColor}
          change={setConfirm}
          label="confirm"
          secret
        />
        <ColorPicker setThemeColor={setThemeColor} />
      </KeyboardAvoidingView>
      <AuthButtons
        nav={navigation}
        disable={disable}
        handleSubmit={handleSubmit}
      />
      {/* <View style={styles.buttons}>
        <Button
          title="LOG IN"
          style={styles.login}
          color="#fff"
          onPress={() => navigation.navigate("signIn")}
        />
        <Text style={styles.or}>OR</Text>
        <Pressable style={styles.create} disabled={disable}>
          <Text style={styles.createText} onPress={handleSubmit}>
            CREATE
          </Text>
        </Pressable>
      </View> */}
    </SafeAreaView>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: "bold",
    width: "60%",
    textAlign: "center",
  },
  form: {
    height: "50%",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "75%",
  },
  // buttons: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   width: "75%",
  // },
  // create: {
  //   backgroundColor: "#fff",
  // },
  // createText: {
  //   fontWeight: "bold",
  //   padding: 10,
  //   letterSpacing: 2,
  //   fontSize: 15,
  // },
  // or: {
  //   color: "#fff",
  //   fontWeight: "bold",
  // },
  // login: {
  //   color: "#fff",
  //   fontSize: 15,
  //   fontWeight: "bold",
  // },
});
