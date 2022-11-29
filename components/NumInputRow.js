import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { gStyles } from "../styles/global";
import Checkbox from "./Checkbox";

const NumInputRow = ({ title, value, change, enabled, setEnabled }) => {
  return (
    <View style={styles.container}>
      <Checkbox bool={enabled} change={setEnabled} />
      <View>
        <Text
          style={[gStyles.subtitle, { color: enabled ? "#fff" : "#828282" }]}
        >
          {title}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "30",
            color: enabled ? "#fff" : "#828282",
          }}
        >
          {value}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Pressable
          onPress={() => change((count) => count - 1)}
          disabled={!enabled}
        >
          <AntDesign
            name="leftsquareo"
            size={40}
            color={enabled ? "#fff" : "#828282"}
          />
        </Pressable>
        <Pressable
          onPress={() => change((count) => count + 1)}
          style={{ marginLeft: 15 }}
          disabled={!enabled}
        >
          <AntDesign
            name="rightsquareo"
            size={40}
            color={enabled ? "#fff" : "#828282"}
          />
        </Pressable>
      </View>
    </View>
  );
};
export default NumInputRow;
const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
