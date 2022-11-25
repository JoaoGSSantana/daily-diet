import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

import { StatisticHeader } from "@components/StatisticHeader";
import { StatisticInfoCard } from "@components/StatisticInfoCard";

import { Container, ContentForm, Row, Title } from "./styles";

import {
  getBestDietSequence,
  getFilteredQuantityOfMeals,
  getQuantityOfMeals,
} from "@utils/dietUtils";

type RouteProps = {
  percentage: number;
};

interface FilteredQuantityOfMealsProps {
  onTheDiet: number;
  offTheDiet: number;
}

export function Statistics() {
  const [quantityOfMeals, setQuantityOfMeals] = useState(0);
  const [bestSequence, setBestSequence] = useState(0);
  const [filteredQuantityOfMeals, setFilteredQuantityOfMeals] =
    useState<FilteredQuantityOfMealsProps>({} as FilteredQuantityOfMealsProps);

  const route = useRoute();
  const { percentage } = route.params as RouteProps;

  const isPositive = percentage > 50;

  async function fetchStatistics() {
    setQuantityOfMeals(await getQuantityOfMeals());
    setFilteredQuantityOfMeals({
      onTheDiet: await getFilteredQuantityOfMeals(true),
      offTheDiet: await getFilteredQuantityOfMeals(false),
    });

    setBestSequence(await getBestDietSequence());
  }

  useEffect(() => {
    fetchStatistics();
  }, []);

  return (
    <Container isPositive={isPositive}>
      <StatisticHeader percentage={percentage} isPositive={isPositive} />
      <ContentForm>
        <Title>Estatísticas gerais</Title>
        <StatisticInfoCard
          number={bestSequence}
          what="melhor sequência de pratos dentro da dieta"
        />
        <StatisticInfoCard
          number={quantityOfMeals}
          what="refeições registradas"
        />
        <Row>
          <StatisticInfoCard
            number={filteredQuantityOfMeals.onTheDiet}
            what="refeições dentro da dieta"
            variant="CONDITIONS"
          />
          <StatisticInfoCard
            style={{ marginLeft: 8 }}
            number={filteredQuantityOfMeals.offTheDiet}
            what="refeições fora da dieta"
            variant="CONDITIONS"
            condition="NEGATIVE"
          />
        </Row>
      </ContentForm>
    </Container>
  );
}
