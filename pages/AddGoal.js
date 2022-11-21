import { useEffect, useRef, useState } from "react";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import {
  Keyboard,
  CloseModal,
  ColorPicker,
  EmojiPicker,
  InputRow,
  NumInputRow,
  Submit,
} from "../components";
import { gStyles } from "../styles/global";

const AddGoal = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(3);
  const [icon, setIcon] = useState("👺");
  const [color, setColor] = useState("32cfff");

  const keyboardAnimation = useRef(new Animated.Value(1000)).current;

  const [show, setShow] = useState(false);

  useEffect(() => {
    Animated.timing(keyboardAnimation, {
      useNativeDriver: true,
      toValue: 0,
      duration: 400,
    }).start();
    if (show) {
      Animated.timing(keyboardAnimation, {
        useNativeDriver: true,
        toValue: 1000,
        duration: 400,
      }).start();
    }
  }, [show]);

  console.log(color);

  const handleSubmit = () => {
    console.log(title);
    console.log(count);
    console.log(icon);
    console.log(color);
  };

  const themeColors = [
    "ffffff",
    "ffeded",
    "ff8787",
    "ff5454",
    "ff2121",
    "ed0000",
    "ffffff",
    "fff8ed",
    "ffd187",
    "ffbd54",
    "ffaa21",
    "ed9200",
    "f6fafe",
    "c7e2fa",
    "98caf6",
    "3b9aed",
    "1581e0",
    "1066b2",
    "0c4c83",
    "f6fef9",
    "c7fad8",
    "98f6b8",
    "3bed77",
    "15e059",
    "10b247",
    "0c8334",
    "fdfbfe",
    "e4cdf9",
    "cb9ff4",
    "9944e9",
    "801ae0",
    "6615b2",
    "4c1084",
  ];

  return (
    <SafeAreaView
      style={[
        gStyles.pageContainer,
        { justifyContent: "space-between", alignItems: "center" },
      ]}
    >
      <CloseModal nav={navigation} dest="allGoals" title="create new goal" />
      <View
        style={{
          justifyContent: "space-between",
          height: "50%",
          width: "95%",
          alignItems: "center",
        }}
      >
        <InputRow value={title} change={setTitle} label="Title" color={color} />
        <InputRow
          value={description}
          change={setDescription}
          label="Description"
          color={color}
          multiline
        />

        <NumInputRow count={count} setCount={setCount} />

        <View style={styles.custInputContainer}>
          <ColorPicker
            color={color}
            show={show}
            setShow={setShow}
            custWidth="45%"
          />
          <EmojiPicker icon={icon} setIcon={setIcon} />
        </View>

        <Submit handler={handleSubmit} color={color} />
      </View>

      {/* <Keyboard /> */}

      <Animated.View
        style={{
          width: "95%",
          paddingVertical: 30,
          height: "45%",
          transform: [{ translateY: keyboardAnimation }],
        }}
      >
        {/* <Text style={gStyles.subtitle}>Keyboard</Text> */}
        <View style={{ width: "100%", flexWrap: "wrap" }}>
          {themeColors.map((c, idx) => (
            <Pressable
              onPress={() => {
                setColor(c);
                setShow(false);
              }}
              key={idx}
              style={{
                width: 30,
                height: 30,
                backgroundColor: c,
                margin: 10,
              }}
            ></Pressable>
          ))}
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};
export default AddGoal;
const styles = StyleSheet.create({
  inputContainer: {
    height: "18%",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  custInputContainer: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
