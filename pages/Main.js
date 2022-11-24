import { useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";

import {
  Menu,
  GoalDash,
  Timeline,
  Title,
  MainLatestActs,
} from "../components";
// firebase
import { Auth } from "../firebase/config";
import { signOut } from "firebase/auth";

import { gStyles } from "../styles/global";

const Main = ({ navigation, route }) => {
  const today = new Date().getDate().valueOf();

  const [selected, setSelected] = useState(today);

  const { date } = route.params;

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

      <GoalDash />

      <Timeline
        nav={navigation}
        date={date}
        selected={selected}
        setSelected={setSelected}
      />

      <MainLatestActs nav={navigation} selected={selected} />

      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default Main;
const styles = StyleSheet.create({});
