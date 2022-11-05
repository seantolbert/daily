import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./components/Menu";
import { Main, MonthView, AllActivity } from "./pages";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="main" component={Main} />
          <Stack.Screen name="monthView" component={MonthView} />
          <Stack.Screen name="allActivity" component={AllActivity} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Menu isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </>
  );
}
