import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BackButton, HomeButton, MonthlyActList } from "../components";
import { gStyles } from "../styles/global";
import { useState } from "react";

const DayView = ({ navigation, route }) => {
  const { day } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <BackButton nav={navigation} />
      <Text style={gStyles.subtitle}>Day View</Text>
      <MonthlyActList selected={day} nav={navigation}/>
      <HomeButton nav={navigation} />
    </SafeAreaView>
  );
};
export default DayView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
  },
});
