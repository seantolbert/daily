import { StyleSheet, Text, View, Button } from "react-native";
import { Auth } from "../firebase/config";
import { gStyles } from "../styles/global";

const UserWelcome = () => {
  return (
    <View style={styles.container}>
      <Text style={gStyles.subtitle}>
        Welcome {Auth.currentUser.displayName}
      </Text>
      <Button title="logout" onPress={() => signOut(Auth)} />
    </View>
  );
};
export default UserWelcome;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
