import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { InputRow } from "../components";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useRegister();

  const handleSubmit = () => {
    login(email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>SignIn</Text>
      <TextInput onChangeText={setEmail} placeholder="email" value={email} />
      <InputRow value={email} label="email" change={setEmail} color="fff" />
      <TextInput
        onChangeText={setPassword}
        placeholder="password"
        value={password}
        secureTextEntry
      />

      <Button onPress={() => navigation.navigate("signUp")} title="sign up" />
      <Button onPress={handleSubmit} title="signIn" />
    </SafeAreaView>
  );
};
export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#000",
  },
});
