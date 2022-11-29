import { StyleSheet, Text, View, Pressable } from "react-native";
import InputRow from "../components/InputRow";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { gStyles } from "../styles/global";
const IconInputRow = ({ tempIcon, setTempIcon, setIcon, color }) => {
  return (
    <View style={styles.container}>
      <InputRow color={color} custWidth="40%" />
      <Pressable onPress={() => setTempIcon()}>
        <Text style={gStyles.subtitle}>Search</Text>
      </Pressable>
      <View style={{ borderRadius: "50%", borderColor: "#fff" }}>
        <View style={styles.shadow}></View>
        <MaterialCommunityIcons
          name={tempIcon}
          size={70}
          color="#fff"
        />
      </View>
    </View>
  );
};
export default IconInputRow;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
