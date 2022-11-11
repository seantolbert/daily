import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BackButton, HomeButton, Menu, MonthlyActList } from "../components";
import { gStyles } from "../styles/global";
import { useState } from "react";

const DayView = ({ navigation, route }) => {
  const { day } = route.params;

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} />
      <MonthlyActList selected={day} nav={navigation} />
      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default DayView;
const styles = StyleSheet.create({});
