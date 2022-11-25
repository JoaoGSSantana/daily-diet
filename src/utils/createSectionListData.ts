import { getMeals } from "@storage/meals/getMeals";
import { MealDTO } from "@storage/meals/MealDTO";

export type MealSectionList = {
  title: string;
  data: MealDTO[];
};

export async function createSectionListData() {
  try {
    const meals = await getMeals();

    const result = meals.reduce((acc, currentMeal) => {
      let dateGroup = acc.find((section) => section.title === currentMeal.date);

      if (!dateGroup) {
        dateGroup = { title: currentMeal.date, data: [] };
        acc.push(dateGroup);
      }

      dateGroup.data.push(currentMeal);
      return acc;
    }, [] as MealSectionList[]);

    result.map((item) => {
      item.data.reverse();
    });

    return result.reverse();
  } catch (error) {
    return [];
  }
}
