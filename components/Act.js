import { StyleSheet, Text, View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const Act = ({ act, handleDelete }) => {
  const [shadowWidth, setShadowWidth] = useState(0);
  const [shadowHeight, setShadowHeight] = useState(0);

  return (
    <View style={{ width: "100%", marginVertical: 10, alignItems: 'center' }}>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#e3e3e3",
          width: shadowWidth,
          height: shadowHeight,
          transform: [{ translateX: 4 }, { translateY: 4 }],
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
          width: '95%'
        }}
        onLayout={(e) => {
          const { width, height } = e.nativeEvent.layout;
          setShadowHeight(height);
          setShadowWidth(width);
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <Text style={{ paddingRight: 10 }}>{act.text}</Text>
          {act.date && <Text style={{ paddingRight: 10 }}>{act.date}</Text>}
          {act.time && <Text style={{ paddingRight: 10 }}>{act.time}</Text>}
        </View>
        <Pressable onPress={() => handleDelete(act.id)}>
          <Feather name="delete" size={30} color="black" />
        </Pressable>
      </View>
    </View>
  );
};
export default Act;
const styles = StyleSheet.create({});
