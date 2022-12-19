import {
  StyleSheet,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { useState } from "react";
import { AuthButtons, BackButton, InputRow } from "../components";
import { useRegister } from "../hooks/useRegister";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { signup } = useRegister();

  const handleSubmit = () => {
    signup(email, password, displayName);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <BackButton nav={navigation} dest="landing" title="create an account" />
      <KeyboardAvoidingView style={styles.form}>
        <InputRow
          value={displayName}
          color='#fff'
          change={setDisplayName}
          label="username"
        />
        <InputRow
          value={email}
          color='#fff'
          change={setEmail}
          label="email"
        />
        <InputRow
          value={password}
          color='#fff'
          change={setPassword}
          label="password"
          secret
        />
        <InputRow
          value={confirm}
          color='#fff'
          change={setConfirm}
          label="confirm"
          secret
        />
          <View style={{ width: "95%", alignItems: "flex-end" }}>
            <Text style={{ color: "#fff" }}>Already have an account?</Text>
          </View>
          <AuthButtons
            nav={navigation}
            isMember={false}
            dest="signIn"
            label="sign up"
            handler={handleSubmit}
            email={email}
            password={password}
            confirm={confirm}
            displayName={displayName}
            navLabel="log in"
          />
      </KeyboardAvoidingView>
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
    height: "60%",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "75%",
  },
});
