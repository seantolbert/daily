import { StyleSheet, Text, View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { gStyles } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";

const Act = ({ act, handleDelete, nav }) => {
  const [shadowWidth, setShadowWidth] = useState(0);
  const [shadowHeight, setShadowHeight] = useState(0);

  return (
    <View style={{ width: "95%", marginVertical: 10, alignItems: "center" }}>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#fff",
          width: shadowWidth,
          height: shadowHeight,
          transform: [{ translateX: 1 }, { translateY: 1 }],
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#000",
          padding: 10,
          width: "100%",
          // borderBottomWidth: 2,
          // borderRightWidth: 2,
          borderColor: "#fff",
        }}
        onLayout={(e) => {
          const { width, height } = e.nativeEvent.layout;
          setShadowHeight(height);
          setShadowWidth(width);
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <Text style={{ paddingRight: 10, color: "#fff" }}>{act.actText}</Text>
          {/* {act.date && (
            <Text style={{ paddingRight: 10, color: "#fff" }}>
              {act.date.valueOf()}
            </Text>
          )} */}
        </View>
        <View style={styles.buttons}>
          <Pressable
            onPress={() => nav.navigate("dayView", { day: act.date.valueOf() })}
          >
            <Ionicons name="navigate-circle-outline" size={25} color="white" />
          </Pressable>
          <Pressable
            onLongPress={() => handleDelete(act.id)}
            style={{ marginLeft: 10 }}
          >
            <Feather name="delete" size={25} color="#fff" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default Act;
const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
  },
});
