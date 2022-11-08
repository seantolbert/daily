import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import { useState } from "react";
import { HomeButton } from "../components";
import { useLogin } from "../hooks/useLogin";
import { useSignup } from "../hooks/useSignup";

const Register = ({ navigation }) => {
  const [isMember, setIsMember] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const { signup } = useSignup();

  const { login } = useLogin();

  const handleSubmit = () => {
    if (isMember) {
      login(email, password);
    }
    if (!isMember) {
      signup(email, password);
    }
    // isMember ? login(email, password) : signup(email, password);

    navigation.navigate("main");
  };

  const disable = password !== confirmPass;

  const { container, form } = styles;

  return (
    <SafeAreaView style={container}>
      <View style={form}>
        <Text style={styles.title}>{isMember ? "Log In" : "Sign Up"}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="password"
            onChangeText={setPassword}
          />
        </View>

        {!isMember && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="confirm"
              onChangeText={setConfirmPass}
            />
          </View>
        )}

        <Button
          onPress={() => setIsMember(!isMember)}
          title={
            isMember ? "Already have an account?" : "Don't have an account?"
          }
        />

        <View style={styles.submitContainer}>
          <Pressable
            style={styles.submit}
            onPress={handleSubmit}
            disabled={isMember ? false : disable}
          >
            <Text style={{ color: "#fff" }}>
              {isMember ? "Log In" : "Sign Up"}
            </Text>
          </Pressable>
        </View>
        <Button title="Forgot Password?" />
      </View>
      <HomeButton nav={navigation} />
    </SafeAreaView>
  );
};
export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
  form: {
    width: "80%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    paddingVertical: 30,
  },
  inputContainer: {
    width: "90%",
    borderBottomWidth: 1,
    marginVertical: 25,
  },
  input: {
    paddingVertical: 10,
  },
  submitContainer: {
    width: "90%",
    paddingVertical: 10,
    alignItems: "flex-end",
  },
  submit: {
    padding: 10,
    backgroundColor: "#000",
    alignItems: "center",
    width: "30%",
  },
});
