import { StyleSheet, Text, View, Pressable } from "react-native";

import { gStyles } from "../styles/global";

const Submit = ({ handler, color }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => handler()}
        style={[styles.button, { borderColor: `#${color}` }]}
      >
        <Text style={gStyles.subtitle}>Submit</Text>
      </Pressable>
    </View>
  );
};
export default Submit;
const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignItems: "flex-end",
  },
  button: {
    borderWidth: 5,
    padding: 15,
    borderRadius: "10px",
  },
});
