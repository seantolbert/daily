import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import Title from "../components/Title";
import { gStyles } from "../styles/global";
import { useState } from "react";
import AddButton from "../components/AddButton";
import { LatestPosts, Menu } from "../components";
import { Auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import GoalDash from "../components/GoalDash";
import Timeline from "../components/Timeline";
import MainLatestActs from "../components/MainLatestActs";

const Main = ({ navigation }) => {
  console.log(Auth.currentUser.uid);

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <Title />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text style={gStyles.subtitle}>
          Welcome {Auth.currentUser.displayName}
        </Text>
        <Button title="logout" onPress={() => signOut(Auth)} />
      </View>

      {/* <LatestPosts actCount={3} limit={true} nav={navigation} /> */}
      <GoalDash />

      <Timeline />

      <MainLatestActs nav={navigation} />

      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default Main;
const styles = StyleSheet.create({});
