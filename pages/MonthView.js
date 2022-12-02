import { useState } from "react";
import { SafeAreaView } from "react-native";
import { BackButton, MonthlyActList, Menu, Calendar } from "../components";
import { gStyles } from "../styles/global";

const MonthView = ({ navigation, route }) => {
  const today = new Date().getDate();

  const { date } = route.params;

  const [selected, setSelected] = useState(today);

  return (
    <SafeAreaView style={gStyles.pageContainer}>
      <BackButton nav={navigation} title={new Date(date).toLocaleString("default", { month: "long" })} date={date} />

      <MonthlyActList selected={selected} nav={navigation} />

      <Calendar selected={selected} setSelected={setSelected} date={date} />

      <Menu nav={navigation} />
    </SafeAreaView>
  );
};
export default MonthView;
