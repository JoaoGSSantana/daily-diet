import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/AppError";

import { MealDTO } from "./MealDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";

import { getMeals } from "./getMeals";

export async function addMeals(currentMeal: MealDTO) {
  try {
    const storedMeals = await getMeals();

    const alreadyMealExist = storedMeals.find(
      (meal) => JSON.stringify(meal) == JSON.stringify(currentMeal)
    );

    if (alreadyMealExist) {
      throw new AppError("Essa refeição já foi cadastrada.");
    }

    const storage = JSON.stringify([...storedMeals, currentMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
