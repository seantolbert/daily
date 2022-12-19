import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { BackButton, InputRow, AuthButtons } from "../components";
import { gStyles } from "../styles/global";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, logInError } = useRegister();

  const handleSubmit = () => {
    login(email, password);
  };

  // console.log("login error: " + logInError);

  return (
    <SafeAreaView
      style={[gStyles.pageContainer, { justifyContent: "flex-start" }]}
    >
      <BackButton nav={navigation} title="log in" dest="landing" />
      <KeyboardAvoidingView style={styles.form}>
        <InputRow value={email} label="email" change={setEmail} color="#fff" />
        <InputRow
          value={password}
          label="password"
          change={setPassword}
          color="#fff"
          secret
        />
        <View style={{ width: "100%", alignItems: "flex-end" }}>
          <Pressable onPress={() => console.log("forgot password")}>
            <Text style={{ color: "#fff" }}>Forgot your password?</Text>
          </Pressable>
        </View>
        <View style={{ width: "100%" }}>
          <View style={{ width: "75%", alignItems: "flex-start" }}>
            <Text style={{ color: "#fff" }}>Don't have an account?</Text>
          </View>
          <AuthButtons
            handler={handleSubmit}
            email={email}
            password={password}
            label="log in"
            nav={navigation}
            dest="signUp"
            navLabel="sign up"
            isMember={true}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default SignIn;
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: "bold",
    width: "60%",
    textAlign: "center",
    color: "#fff",
  },
  form: {
    height: "50%",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "75%",
    marginTop: 30,
  },

  buttonText: {
    color: "#fff",
    letterSpacing: 2,
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});
