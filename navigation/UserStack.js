import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Main,
  MonthView,
  AllActivity,
  SignIn,
  SignUp,
  Landing,
} from "../pages";
import AddForm from "../pages/AddForm";

const Stack = createNativeStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="main" component={Main} />
        {/* <Stack.Screen name="signUp" component={SignUp} /> */}
        <Stack.Screen name="AllActivity" component={AllActivity} />
        <Stack.Screen
          name="AddForm"
          component={AddForm}
          options={{ presentation: "Modal" }}
        />

        {/* <Stack.Screen name="signIn" component={SignIn} /> */}
        {/* <Stack.Screen name="landing" component={Landing} /> */}
        {/* <Stack.Screen name="register" component={Register} /> */}
        <Stack.Screen name="monthView" component={MonthView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
