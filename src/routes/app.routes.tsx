import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NewMeal } from "@screens/NewMeal";
import { UpdateMeal } from "@screens/UpdateMeal";
import { Response } from "@screens/Response";
import { Statistics } from "@screens/Statistics";

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="updateMeal" component={UpdateMeal} />
      <Screen name="meal" component={Meal} />
      <Screen name="response" component={Response} />
    </Navigator>
  );
}
