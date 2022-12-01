import { useCallback, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { SectionList, Alert } from "react-native";
import { Plus } from "phosphor-react-native";

import { Button } from "@components/Button";
import { HomeHeader } from "@components/HomeHeader";
import { MealCard } from "@components/MealCard";
import { Loading } from "@components/Loading";
import { StatisticsCard } from "@components/StatisticsCard";

import { ButtonForm, ButtonLabel, Container, TitleHeader } from "./styles";

import {
  createSectionListData,
  MealSectionList,
} from "@utils/createSectionListData";

import { MealDTO } from "@storage/meals/MealDTO";
import { getBestDietSequence, getDietPercentage } from "@utils/dietUtils";

export function Home() {
  const [mealsList, setMealsList] = useState<MealSectionList[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState(100);

  const navigation = useNavigation();

  function handleNavigateToStatistics() {
    return navigation.navigate("statistics", { percentage });
  }

  function handleNewMeal() {
    navigation.navigate("newMeal");
  }

  function handleOpenMeal(meal: MealDTO) {
    navigation.navigate("meal", { meal });
  }

  async function getSectionList() {
    try {
      setIsLoading(true);

      const list = await createSectionListData();
      setMealsList(list);
    } catch (error) {
      Alert.alert("Lista de refeições", "Não foi possível carregar a lista.");
    } finally {
      const percentageValue = await getDietPercentage();
      setPercentage(percentageValue);

      await getBestDietSequence();

      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getSectionList();
    }, [])
  );

  return (
    <Container>
      <HomeHeader />
      <StatisticsCard
        title={percentage}
        subtitle="das refeições dentro da dieta"
        onPress={handleNavigateToStatistics}
      />
      <ButtonForm>
        <ButtonLabel>Refeições</ButtonLabel>
        <Button
          icon={<Plus />}
          title="Nova refeição"
          type="PRIMARY"
          onPress={handleNewMeal}
        />
      </ButtonForm>
      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={mealsList}
          keyExtractor={({ name }, index) => index + name}
          renderItem={({ item }) => (
            <MealCard
              name={item.name}
              hours={item.hours}
              onTheDiet={item.onTheDiet}
              onPress={() => handleOpenMeal(item)}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <TitleHeader>{title}</TitleHeader>
          )}
        />
      )}
    </Container>
  );
}
