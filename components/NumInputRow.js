import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { gStyles } from "../styles/global";

const NumInputRow = ({ daily, title, value, change }) => {
  return (
    <View
      style={{
        width: "95%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 10,
      }}
    >
      <View style={{ width: "45%" }}>
        <Text style={gStyles.subtitle}>{title}</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: "30", color: daily ? "#828282" : "#fff" }}>
          {value}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Pressable onPress={() => change((count) => count - 1)}>
          <AntDesign name="leftsquareo" size={40} color={daily ? "#828282" : "#fff"} />
        </Pressable>
        <Pressable
          onPress={() => change((count) => count + 1)}
          style={{ marginLeft: 15 }}
        >
          <AntDesign name="rightsquareo" size={40} color={daily ? "#828282" : "#fff"}/>
        </Pressable>
      </View>
    </View>
  );
};
export default NumInputRow;
const styles = StyleSheet.create({});
