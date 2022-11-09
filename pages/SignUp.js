import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = async () => {
    console.log("email: ", email);
    console.log("password: ", password);

    await createUserWithEmailAndPassword(Auth, email, password)
      .then((res) => {
        const user = res.user;
        console.log(`${user.email} signed up and logged in`);
      })
      .catch((err) => console.log(err.message));
    await updateProfile(Auth.currentUser, { displayName })
      .then(() => console.log("username: ", Auth.currentUser.displayName))
      .catch((err) => console.log(err.message));
  };

  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <TextInput onChangeText={setEmail} placeholder="email" value={email} />
      <TextInput
        onChangeText={setPassword}
        placeholder="password"
        value={password}
        secureTextEntry
      />
      <TextInput
        onChangeText={setConfirm}
        placeholder="confirm"
        value={confirm}
        secureTextEntry
      />
      <TextInput
        onChangeText={setDisplayName}
        placeholder="username"
        value={displayName}
        secureTextEntry
      />

      <Button onPress={handleSubmit} title="signUp" />
    </View>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
