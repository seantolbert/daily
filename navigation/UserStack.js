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
  Profile,
  GoalView,
  AltAddGoal,
  Test,
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
          name="dayView"
          component={DayView}
          initialParams={{ date: new Date().toDateString() }}
        />
        <Stack.Screen name="test" component={Test} />
        <Stack.Screen
          name="addGoal"
          component={AltAddGoal}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="allGoals" component={AllGoals} />

        <Stack.Screen name="loading" component={Loading} />
        <Stack.Screen
          name="goalView"
          component={GoalView}
          initialParams={{ goal: {}, isUpdate: true }}
        />

        <Stack.Screen
          name="addAct"
          component={AddAct}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen
          name="monthView"
          component={MonthView}
          initialParams={{ date: new Date().toDateString() }}
        />

        <Stack.Screen name="allActivity" component={AllActivity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
