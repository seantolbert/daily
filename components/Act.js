import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

const Act = ({ act, nav, custWidth }) => {
  const [shadowWidth, setShadowWidth] = useState(0);
  const [shadowHeight, setShadowHeight] = useState(0);

  const handleDelete = async (id) => {
    const docRef = doc(db, "activities", id);
    await deleteDoc(docRef);
  };

  const timeHelper = (date) => {
    const fullTime = new Date(date).toLocaleTimeString().split(":");
  };

  // console.log(new Date(act.time).toLocaleTimeString().split(":"));

  return (
    <View style={{ width: "95%", marginVertical: 10, alignItems: "center" }}>
      <View
        style={{
          position: "absolute",
          backgroundColor: `#${act.color}`,
          width: shadowWidth,
          height: shadowHeight,
          transform: [{ translateX: 3 }, { translateY: 3 }],
          borderRadius: "10px",
        }}
      ></View>
      <View
        style={{
          borderRadius: "10px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#000",
          padding: 10,
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
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ paddingRight: 10, color: "#fff", fontSize: 20 }}>
              {act.actText}
            </Text>
            {act.date && (
              <Text
                style={{ paddingRight: 10, color: "#e3e3e3", fontSize: 12 }}
              >
                {new Date(act.time).toLocaleTimeString()}
              </Text>
            )}
          </View>
          {act.icon && (
            <MaterialCommunityIcons
              name={act.icon}
              color={act.color}
              size={30}
            />
          )}
        </View>
        <View style={styles.buttons}>
          <Pressable
            style={{ marginLeft: 20 }}
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
    alignItems: "center",
  },
});
