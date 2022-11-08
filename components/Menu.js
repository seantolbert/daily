import {
  StyleSheet,
  SafeAreaView,
  Animated,
  Pressable,
  View,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { useRef } from "react";

const Menu = ({ isOpen, setIsOpen }) => {
  //   const spinAnim = useRef(new Animated.Value(0)).current;

  //   const handleSpin = () => {
  //     Animated.timing(spinAnim, {
  //       useNativeDriver: true,
  //       duration: 600,
  //       toValue: 50,
  //     }).start();
  //   };
  // console.log(isOpen);

  const { container, menuContainer, menuButton, menuOptions, inner } = styles;
  return (
    <>
      <SafeAreaView style={container}>
        <Animated.View style={menuContainer}>
          <Pressable style={menuButton} onPress={() => setIsOpen(!isOpen)}>
            <MaterialCommunityIcons name="ship-wheel" size={40} color="#fff" />
          </Pressable>
        </Animated.View>
      </SafeAreaView>
      {/* <Modal style={menuOptions} visible={isOpen}>
        <View style={inner}></View>
      </Modal> */}
    </>
  );
};
export default Menu;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  menuButton: {
    backgroundColor: "#000",
    borderRadius: "50%",
    padding: 15,
  },
});
