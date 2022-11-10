import {
  StyleSheet,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import { AuthButtons, BackButton, ColorPicker, InputRow } from "../components";
import { useRegister } from "../hooks/useRegister";

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
        color={themeColor}
        nav={navigation}
        disable={disable}
        handleSubmit={handleSubmit}
        confirm={confirm}
        password={password}
      />
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
});
