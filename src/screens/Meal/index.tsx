import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import { Trash, PencilSimpleLine } from "phosphor-react-native";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { DeleteModal } from "@components/DeleteModal";

import {
  Container,
  ContentForm,
  Name,
  Information,
  Label,
  Tag,
  Circle,
  TagText,
  Footer,
} from "./styles";

import { AppError } from "@utils/AppError";

import { MealDTO } from "@storage/meals/MealDTO";
import { deleteMeal } from "@storage/meals/deleteMeal";

type RouteProps = {
  meal: MealDTO;
};

export function Meal() {
  const [visibleDelete, setVisibleDelete] = useState(false);

  const routes = useRoute();
  const { navigate } = useNavigation();

  const { meal } = routes.params as RouteProps;
  const { name, description, date, hours, onTheDiet } = meal;

  function handleNavigateToUpdate() {
    navigate("updateMeal", { mealForUpdate: meal });
  }

  async function handleDeleteMeal() {
    try {
      await deleteMeal(meal);

      navigate("home");
    } catch (error) {
      if (error instanceof AppError)
        return Alert.alert("Excluir refeição", error.message);
      else
        Alert.alert(
          "Excluir refeição",
          "Não foi possível excluir sua refeição"
        );
    }
  }

  function handleShowDeleteModal() {
    try {
      setVisibleDelete(!visibleDelete);
    } catch (error) {
      Alert.alert("Excluir refeição", "Não foi possível excluir sua refeição");
    }
  }

  function handleCloseDeleteModal() {
    setVisibleDelete(!visibleDelete);
  }

  return (
    <Container>
      <Header title="Refeição" type={onTheDiet ? "POSITIVE" : "NEGATIVE"} />
      <ContentForm>
        <Name>{name}</Name>
        <Information>{description}</Information>
        <Label>Data e hora</Label>
        <Information>{`${date} às ${hours}`}</Information>
        <Tag>
          <Circle onTheDiet={onTheDiet} />
          <TagText>{`${onTheDiet ? "dentro" : "fora"} da dieta`}</TagText>
        </Tag>
      </ContentForm>
      <Footer>
        <Button
          icon={<PencilSimpleLine />}
          title="Editar refeição"
          style={{ marginBottom: 12 }}
          onPress={handleNavigateToUpdate}
        />
        <Button
          icon={<Trash />}
          title="Excluir refeição"
          type="SECONDARY"
          onPress={handleShowDeleteModal}
        />
      </Footer>
      <DeleteModal
        visible={visibleDelete}
        onRequestClose={handleCloseDeleteModal}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleDeleteMeal}
      />
    </Container>
  );
}
