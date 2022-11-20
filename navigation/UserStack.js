import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Main,
  MonthView,
  AllActivity,
  Loading,
  AllGoals,
  DayView,
  AddAct,
  AddGoal,
  Profile,
  Settings,
} from "../pages";

const Stack = createNativeStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="main"
          component={Main}
          initialParams={{ date: new Date().toDateString() }}
        />
        <Stack.Screen
          name="monthView"
          component={MonthView}
          initialParams={{ date: new Date().toDateString() }}
        />
        <Stack.Screen
          name="addAct"
          component={AddAct}
          options={{ presentation: "Modal" }}
        />
        <Stack.Screen
          name="dayView"
          component={DayView}
          initialParams={{ date: new Date().toDateString() }}
        />
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="allGoals" component={AllGoals} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen
          name="addGoal"
          component={AddGoal}
          options={{ presentation: "Modal" }}
        />
        <Stack.Screen name="loading" component={Loading} />
        <Stack.Screen name="allActivity" component={AllActivity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
