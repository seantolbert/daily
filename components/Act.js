import { StyleSheet, Text, View, Pressable, Animated } from "react-native";
import { useRef, useState } from "react";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

const Act = ({ act, nav, custWidth }) => {
  const [shadowWidth, setShadowWidth] = useState(0);
  const [shadowHeight, setShadowHeight] = useState(0);

  const actRef = useRef(new Animated.Value(3)).current;

  const handlePressIn = () => {
    Animated.timing(actRef, {
      useNativeDriver: true,
      toValue: 8,
      duration: 500,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(actRef, {
      useNativeDriver: true,
      toValue: 3,
      duration: 500,
    }).start();
  };

  const handleDelete = async (id) => {
    const docRef = doc(db, "activities", id);
    await deleteDoc(docRef);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={{ width: custWidth ? custWidth : "95%" }}
        onPressOut={() => handlePressOut()}
        onPressIn={() => handlePressIn()}
      >
        <Animated.View
          style={[
            styles.shadow,
            {
              width: shadowWidth,
              height: shadowHeight,
              backgroundColor: `#${act.color}`,
              transform: [{ translateX: actRef }, { translateY: actRef }],
            },
          ]}
        ></Animated.View>
        <Animated.View
          style={[styles.box, {}]}
          onLayout={(e) => {
            const { width, height } = e.nativeEvent.layout;
            setShadowHeight(height);
            setShadowWidth(width);
          }}
        >
          <View style={styles.content}>
            <View>
              <Text style={styles.text}>{act.actText}</Text>
              {act.date && <Text style={styles.smallText}>{act.date}</Text>}
            </View>
          </View>
          <View style={styles.buttons}>
            {act.icon && (
              <MaterialCommunityIcons
                name={act.icon}
                color={`#${act.color}`}
                size={30}
              />
            )}
            <Pressable
              style={{ marginLeft: 20 }}
              onPress={() =>
                nav.navigate("dayView", {
                  day: new Date(act.date).toDateString(),
                })
              }
            >
              <Ionicons
                name="navigate-circle-outline"
                size={25}
                color="white"
              />
            </Pressable>
            <Pressable
              onLongPress={() => handleDelete(act.id)}
              style={{ marginLeft: 10 }}
            >
              <Feather name="delete" size={25} color="#fff" />
            </Pressable>
          </View>
        </Animated.View>
      </Pressable>
    </View>
  );
};
export default Act;
const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginVertical: 10,
    alignItems: "center",
  },
  shadow: {
    position: "absolute",
    // transform: [{ translateX: 3 }, { translateY: 3 }],
    borderRadius: "10px",
  },
  box: {
    borderRadius: "10px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
    padding: 10,
    width: "100%",
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  content: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: { paddingRight: 10, color: "#fff", fontSize: 16 },
  smallText: { paddingRight: 10, color: "#e3e3e3", fontSize: 12 },
});
