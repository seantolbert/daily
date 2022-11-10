import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Main, MonthView, AllActivity, Loading, AllGoals } from "../pages";
import AddForm from "../pages/AddForm";

const Stack = createNativeStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="addForm"
          component={AddForm}
          options={{ presentation: "Modal" }}
        />
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="loading" component={Loading} />
        <Stack.Screen name="allActivity" component={AllActivity} />
        <Stack.Screen name="monthView" component={MonthView} />
        <Stack.Screen name="allGoals" component={AllGoals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
