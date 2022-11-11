import { StyleSheet, Text, View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { gStyles } from "../styles/global";

const Act = ({ act, handleDelete, nav }) => {
  const [shadowWidth, setShadowWidth] = useState(0);
  const [shadowHeight, setShadowHeight] = useState(0);

  return (
    <View style={{ width: "95%", marginVertical: 10, alignItems: "center" }}>
      <View
        style={{
          position: "absolute",
          backgroundColor: `#${act.color}`,
          width: shadowWidth,
          height: shadowHeight,
          transform: [{ translateX: 6 }, { translateY: 6 }],
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          paddingHorizontal: 4,
          paddingVertical: 10,
          width: "100%",
          borderBottomWidth: 2,
          borderRightWidth: 2,
          borderColor: `#${act.color}`,
        }}
        onLayout={(e) => {
          const { width, height } = e.nativeEvent.layout;
          setShadowHeight(height);
          setShadowWidth(width);
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <Text style={{ paddingRight: 10 }}>{act.text}</Text>
          {act.date && (
            <Text style={{ paddingRight: 10 }}>{act.date.valueOf()}</Text>
          )}
        </View>
        <Pressable onPress={() => nav.navigate("dayView", {day: act.date.valueOf()})}>
          <Text>Day</Text>
        </Pressable>
        <Pressable onLongPress={() => handleDelete(act.id)}>
          <Feather name="delete" size={30} color="black" />
        </Pressable>
      </View>
    </View>
  );
};
export default Act;
const styles = StyleSheet.create({});
