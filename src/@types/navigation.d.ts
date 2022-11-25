import { ResponseStyleTypeProps } from "@screens/Response/styles";
import { MealDTO } from "@storage/meal/MealDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        percentage: number;
      };
      newMeal: undefined;
      response: {
        type: ResponseStyleTypeProps;
      };
      meal: {
        meal: MealDTO;
      };
      updateMeal: {
        mealForUpdate: MealDTO;
      };
    }
  }
}
