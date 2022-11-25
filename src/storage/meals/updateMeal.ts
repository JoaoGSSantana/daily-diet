import { addMeals } from "./addMeals";
import { deleteMeal } from "./deleteMeal";
import { MealDTO } from "./MealDTO";

export async function updateMeal(currentMeal: MealDTO) {
  try {
    await deleteMeal(currentMeal);

    await addMeals(currentMeal);
  } catch (error) {
    throw error;
  }
}
