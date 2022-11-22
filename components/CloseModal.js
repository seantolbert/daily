import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { gStyles } from "../styles/global";

const CloseModal = ({ nav, title, dest }) => {
  return (
    <View style={styles.container}>
      <Text style={gStyles.subtitle}>{title}</Text>
      <Pressable onPress={() => nav.navigate(dest)}>
        <AntDesign name="close" size={40} color="#fff" />
      </Pressable>
    </View>
  );
};
export default CloseModal;
const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
