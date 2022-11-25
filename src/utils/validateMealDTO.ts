import { AppError } from "./AppError";

import { MealDTO } from "@storage/meals/MealDTO";

export function validateMealDTO(meal: MealDTO) {
  Object.entries(meal).map((item) => {
    if (!item[1] && typeof item[1] !== "boolean")
      throw new AppError("Alguma informação não foi preenchida corretamente.");

    if (item[0] === "onTheDiet" && typeof item[1] !== "boolean")
      throw new AppError(
        "Selecione se a refeição está ou não dentro de sua dieta."
      );
  });
}
