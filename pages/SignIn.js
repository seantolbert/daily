import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { BackButton, InputRow } from "../components";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useRegister();

  const handleSubmit = () => {
    login(email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton nav={navigation} dest="landing" />
      <Text style={styles.title}>LOG IN</Text>
      <KeyboardAvoidingView style={styles.form}>
        <InputRow value={email} label="email" change={setEmail} color="fff" />
        <InputRow
          value={password}
          label="password"
          change={setPassword}
          color="fff"
          secret
        />
        <Pressable onPress={() => console.log("forgot password")}>
          <Text style={{ color: "#fff" }}>forgot your password?</Text>
        </Pressable>
      </KeyboardAvoidingView>
      <View style={styles.buttons}>
        <Pressable style={styles.login} onPress={handleSubmit}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </Pressable>
        <Text style={{ color: "#fff" }}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("signUp")}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default SignIn;
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
    color: "#fff",
  },
  form: {
    height: "30%",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "75%",
  },
  buttons: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "75%",
  },
  login: {
    paddingVertical: 15,
  },
  buttonText: {
    color: "#fff",
    letterSpacing: 2,
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});
