import { addBestSequence } from "@storage/bestSequence/addBestSequence";
import { getBestSequence } from "@storage/bestSequence/getBestSequence";
import { getMeals } from "@storage/meals/getMeals";

export async function getQuantityOfMeals() {
  const meals = await getMeals();

  return meals.length;
}

export async function getFilteredQuantityOfMeals(onTheDiet: boolean = true) {
  const meals = await getMeals();
  const mealsOnTheDiet = meals.filter((meal) => meal.onTheDiet);

  if (onTheDiet) return mealsOnTheDiet.length;
  else return meals.length - mealsOnTheDiet.length;
}

export async function getDietPercentage() {
  const mealsQuantity = await getQuantityOfMeals();
  const mealsOnTheDietQuantity: number = await getFilteredQuantityOfMeals(true);

  const result: number = parseFloat(
    ((100 * mealsOnTheDietQuantity) / mealsQuantity).toFixed(2)
  );

  return isNaN(result) ? 0 : result;
}

export async function getBestDietSequence() {
  const mealsArray = await getMeals();
  const meals = mealsArray.reverse();

  const mealsOnTheDiet = [];

  for (let index = 0; index < meals.length; index++) {
    if (meals[index].onTheDiet) {
      mealsOnTheDiet.push(meals[index]);
    } else {
      break;
    }
  }

  await addBestSequence(mealsOnTheDiet.length);
  const bestSequence = await getBestSequence();

  return bestSequence;
}
