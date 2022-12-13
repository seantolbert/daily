import { useState } from "react";
import { SafeAreaView } from "react-native";

import {
  Menu,
  GoalDash,
  Timeline,
  MainLatestActs,
  UserWelcome,
} from "../components";

import { gStyles } from "../styles/global";

const Main = ({ navigation, route }) => {
  const todayDate = new Date().getDate();
  const [selected, setSelected] = useState(todayDate);

  const { date } = route.params;

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      
      <UserWelcome />

      <GoalDash nav={navigation}/>

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
