import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("email: ", email);
    console.log("password: ", password);
    signInWithEmailAndPassword(Auth, email, password)
      .then((res) => {
        const user = res.user;
        console.log(`${user.email} successfully logged in`);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
      <TextInput onChangeText={setEmail} placeholder="email" value={email} />
      <TextInput
        onChangeText={setPassword}
        placeholder="password"
        value={password}
        secureTextEntry
      />

      <Button onPress={() => navigation.navigate("signUp")} title="sign up" />
      <Button onPress={handleSubmit} title="signIn" />
    </View>
  );
};
export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
