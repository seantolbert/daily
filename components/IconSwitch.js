import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { gStyles } from "../styles/global";

const IconSwitch = ({ icon, setShow, color }) => {
  return (
    <View
      style={{
        width: "40%",
        height: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={gStyles.subtitle}>icon</Text>
      <View
        style={{
          width: 50,
          height: 50,
          borderWidth: 2,
          borderRadius: "50%",
          borderColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons name={icon} color={`#${color}`} size={38} />
      </View>
    </View>
  );
};
export default IconSwitch;
const styles = StyleSheet.create({});
