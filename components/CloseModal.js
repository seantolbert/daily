import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CloseModal = ({ nav }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => nav.navigate("main")}>
        <AntDesign
          name="closecircleo"
          size={40}
          color="#fff"
          style={{ padding: 10 }}
        />
      </Pressable>
      <Text>CloseModal</Text>
    </View>
  );
};
export default CloseModal;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
  },
});
