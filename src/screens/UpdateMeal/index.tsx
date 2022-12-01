import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { MaskInput } from "@components/MaskInput";
import { Select } from "@components/Select";

import {
  Container,
  ContentForm,
  DateAndHourForm,
  Footer,
  Label,
  SelectContainer,
} from "./styles";

import { AppError } from "@utils/AppError";
import { validateMealDTO } from "@utils/validateMealDTO";

import { MealDTO } from "@storage/meals/MealDTO";
import { updateMeal } from "@storage/meals/updateMeal";

type RouteProps = {
  mealForUpdate: MealDTO;
};

export function UpdateMeal() {
  const [meal, setMeal] = useState({} as MealDTO);

  const navigation = useNavigation();
  const route = useRoute();

  const { mealForUpdate } = route.params as RouteProps;

  function handleSelected(onTheDiet: boolean) {
    setMeal((prevState) => ({ ...prevState, onTheDiet }));
  }

  async function handleUpdateMeal() {
    try {
      validateMealDTO(meal);

      await updateMeal(meal);

      const type = meal.onTheDiet ? "SUCCESS" : "FAILURE";

      navigation.navigate("response", {
        type,
      });
    } catch (error) {
      if (error instanceof AppError)
        return Alert.alert("Cadastrar refeição", error.message);
      else
        Alert.alert(
          "Cadastrar refeição",
          "Não foi possível cadastrar sua refeição"
        );
    }
  }

  useEffect(() => {
    if (mealForUpdate) {
      setMeal(mealForUpdate);
    }
  }, [mealForUpdate]);

  return (
    <Container>
      <Header title="Editar refeição" />
      <ContentForm>
        <Input
          label="Nome"
          value={meal.name}
          onChangeText={(text) =>
            setMeal((prevState) => ({ ...prevState, name: text.trim() }))
          }
        />
        <Input
          label="Descrição"
          multiline
          scrollEnabled
          style={{ height: 120 }}
          value={meal.description}
          onChangeText={(text) =>
            setMeal((prevState) => ({ ...prevState, description: text.trim() }))
          }
        />
        <DateAndHourForm>
          <MaskInput
            label="Data"
            mask="99/99/9999"
            keyboardType="number-pad"
            value={meal.date}
            onChangeText={(text) =>
              setMeal((prevState) => ({ ...prevState, date: text.trim() }))
            }
          />
          <MaskInput
            label="Hora"
            mask="99:99"
            keyboardType="number-pad"
            value={meal.hours}
            onChangeText={(text) =>
              setMeal((prevState) => ({ ...prevState, hours: text.trim() }))
            }
          />
        </DateAndHourForm>
        <Label>Está dentro da dieta?</Label>
        <SelectContainer>
          <Select
            isSelected={meal.onTheDiet}
            type="PRIMARY"
            title="Sim"
            onPress={() => handleSelected(true)}
          />
          <Select
            isSelected={!meal.onTheDiet}
            type="SECONDARY"
            title="Não"
            onPress={() => handleSelected(false)}
            spaceBetweenSelect
          />
        </SelectContainer>
      </ContentForm>
      <Footer>
        <Button title="Salvar alterações" onPress={handleUpdateMeal} />
      </Footer>
    </Container>
  );
}
