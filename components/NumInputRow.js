import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { gStyles } from "../styles/global";

const NumInputRow = ({ count, setCount }) => {
  return (
    <View
      style={{
        width: "95%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        // paddingVertical: 30,

      }}
    >
      <View style={{ width: "35%" }}>
        <Text style={gStyles.subtitle}>weekly goal</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: "30", color: "#fff" }}>
          {count}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        //   width: "25%",
        //   justifyContent: "space-between",
        }}
      >
        <Pressable onPress={() => setCount((count) => count - 1)}>
          <AntDesign name="leftsquareo" size={40} color="#fff" />
        </Pressable>
        <Pressable onPress={() => setCount((count) => count + 1)} style={{marginLeft: 15}}>
          <AntDesign name="rightsquareo" size={40} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};
export default NumInputRow;
const styles = StyleSheet.create({});
