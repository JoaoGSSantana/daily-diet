import { useState } from "react";
import { Alert, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

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
import { addMeals } from "@storage/meals/addMeals";

export function NewMeal() {
  const [onTheDiet, setOnTheDiet] = useState("");
  const [meal, setMeal] = useState({
    name: "",
    description: "",
    date: "",
    hours: "",
  });

  const navigation = useNavigation();

  function handleSelected(item: string) {
    setOnTheDiet(item);
  }

  async function handleRegisterNewMeal() {
    try {
      const currentMeal: MealDTO = {
        id: uuid.v4(),
        ...meal,
        onTheDiet: onTheDiet === "Sim",
      };

      validateMealDTO(currentMeal);

      await addMeals(currentMeal);

      const type = currentMeal.onTheDiet ? "SUCCESS" : "FAILURE";

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

  return (
    <Container>
      <Header title="Nova refeição" />
      <ContentForm>
        <Input
          label="Nome"
          onChangeText={(text) =>
            setMeal((prevState) => ({ ...prevState, name: text.trim() }))
          }
        />
        <Input
          label="Descrição"
          multiline
          scrollEnabled
          style={{ height: 120 }}
          onChangeText={(text) =>
            setMeal((prevState) => ({ ...prevState, description: text.trim() }))
          }
        />
        <DateAndHourForm>
          <MaskInput
            label="Data"
            mask="99/99/9999"
            keyboardType="number-pad"
            onChangeText={(text) =>
              setMeal((prevState) => ({ ...prevState, date: text.trim() }))
            }
          />
          <MaskInput
            label="Hora"
            mask="99:99"
            keyboardType="number-pad"
            onChangeText={(text) =>
              setMeal((prevState) => ({ ...prevState, hours: text.trim() }))
            }
          />
        </DateAndHourForm>
        <Label>Está dentro da dieta?</Label>
        <SelectContainer>
          <Select
            isSelected={onTheDiet === "Sim"}
            type="PRIMARY"
            title="Sim"
            onPress={() => handleSelected("Sim")}
          />
          <Select
            isSelected={onTheDiet === "Não"}
            type="SECONDARY"
            title="Não"
            onPress={() => handleSelected("Não")}
            spaceBetweenSelect
          />
        </SelectContainer>
      </ContentForm>
      <Footer>
        <Button title="Cadastrar refeição" onPress={handleRegisterNewMeal} />
      </Footer>
    </Container>
  );
}
