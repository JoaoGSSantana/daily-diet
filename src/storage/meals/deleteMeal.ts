import AsyncStorage from "@react-native-async-storage/async-storage";

import { getMeals } from "./getMeals";

import { MealDTO } from "./MealDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function deleteMeal(currentMeal: MealDTO) {
  try {
    const storedMeals = await getMeals();

    const meals = storedMeals.filter((meal) => meal.id !== currentMeal.id);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
}
