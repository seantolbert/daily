import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import Title from "../components/Title";
import { gStyles } from "../styles/global";
import { useState } from "react";
import AddButton from "../components/AddButton";
import { LatestPosts, Menu } from "../components";
import { Auth } from "../firebase/config";
import { signOut } from "firebase/auth";

const Main = ({ navigation }) => {

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <Title />

      <LatestPosts actCount={3} limit={true} nav={navigation} />

      

      <Text style={gStyles.subtitle}>{Auth.currentUser.displayName}</Text>

      <Button title="logout" onPress={() => signOut(Auth)} />

      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default Main;
const styles = StyleSheet.create({});
