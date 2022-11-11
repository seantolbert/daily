import { StyleSheet, Text, View, Pressable } from "react-native";

import { gStyles } from "../styles/global";

const Submit = ({ handleSubmit }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={[gStyles.subtitle, { padding: 10 }]}>Submit</Text>
      </Pressable>
    </View>
  );
};
export default Submit;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  button: {
    borderWidth: 2,
    borderColor: "white",
    width: "30%",
    alignItems: "center",
  },
});
