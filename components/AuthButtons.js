import { StyleSheet, Text, View, Button, Pressable } from "react-native";
const AuthButtons = ({ nav, disable, handleSubmit }) => {
  return (
    <View style={styles.buttons}>
      <Button
        title="LOG IN"
        style={styles.login}
        color="#fff"
        onPress={() => nav.navigate("signIn")}
      />
      <Text style={styles.or}>OR</Text>
      <Pressable style={styles.create} disabled={disable}>
        <Text style={styles.createText} onPress={handleSubmit}>
          CREATE
        </Text>
      </Pressable>
    </View>
  );
};
export default AuthButtons;
const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "75%",
  },
  create: {
    backgroundColor: "#fff",
  },
  createText: {
    fontWeight: "bold",
    padding: 10,
    letterSpacing: 2,
    fontSize: 15,
  },
  or: {
    color: "#fff",
    fontWeight: "bold",
  },
  login: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
