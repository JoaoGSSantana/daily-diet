import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealDTO } from "./MealDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function getMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
