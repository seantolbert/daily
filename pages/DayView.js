import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { BackButton, HomeButton, Menu, MonthlyActList } from "../components";
import { gStyles } from "../styles/global";
import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import DayViewAct from "../components/DayViewAct";
import Act from "../components/Act";

const DayView = ({ navigation, route }) => {
  const { date } = route.params;

  console.log(new Date(date).toDateString());

  const [offsetX, setOffsetX] = useState(0);
  const [width, setWidth] = useState(0);
  const [contHeight, setContHeight] = useState(0);
  const [height, setHeight] = useState(0);

  const { documents: acts } = useCollection("activities");

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} title={date} />
      <Text style={{ color: "" }}></Text>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              height: "100%",
              width: "100%",
              borderColor: "#fff",
              position: "absolute",
              justifyContent: "center",
            }}
            onLayout={(e) => {
              const { height } = e.nativeEvent.layout;
              setContHeight(height - 20);
            }}
          >
            <View
              style={{
                height: contHeight - height,
                width: 2,
                transform: [
                  { translateX: offsetX + width / 2 - 1 },
                  { translateY: -10 },
                ],
                backgroundColor: "#474747",
              }}
            ></View>
          </View>
          <View
            style={{
              justifyContent: "flex-start",
            }}
          >
            {acts &&
              acts
                .filter((act) => act.fullDate === date)
                .map((act, idx) => {
                  console.log("fullDate: " + act.fullDate);
                  return (
                    <DayViewAct
                      act={act}
                      key={idx}
                      setWidth={setWidth}
                      setOffsetX={setOffsetX}
                      setHeight={setHeight}
                      // setContHeight={setContHeight}
                      nav={navigation}
                    />
                  );
                })}
          </View>
        </View>
      </ScrollView>
      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default DayView;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
