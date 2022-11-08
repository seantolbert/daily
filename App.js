import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main, MonthView, AllActivity, Register } from "./pages";
import { useState } from "react";
import { AuthContextProvider as Provider } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Provider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="main" component={Main} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="monthView" component={MonthView} />
            <Stack.Screen name="AllActivity" component={AllActivity} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  );
}
