import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";

const TlDay = ({ today, day }) => {
  return (
    <View
            style={{
              marginHorizontal: 10,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: 2,
                position: "absolute",
                height: "100%",
                backgroundColor: "white",
              }}
            ></View>
            <Text
              style={[
                gStyles.subtitle,
                {
                  // borderRadius: "30px",
                  color: day === today ? "#000" : "#fff",
                  fontSize: 30,
                  backgroundColor: day === today ? "#fff" : "#000",
                  padding: 0,
                  margin: 0,
                  borderColor: "#fff",
                  // padding: 8,
                },
              ]}
            >
              {day}
            </Text>
          </View>
  );
};
export default TlDay;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",

  },
  line: {
    width: 2,
    // height: "100%",
    height: 10,
    backgroundColor: "#fff",
    // position: "absolute",
  },
});
