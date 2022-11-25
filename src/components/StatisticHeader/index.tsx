import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Highlight } from "@components/Highlight";
import {
  Container,
  ButtonIcon,
  Icon,
  StatisticHeaderStyleProps,
} from "./styles";

interface Props extends StatisticHeaderStyleProps {
  percentage: number;
}

export function StatisticHeader({ percentage, isPositive }: Props) {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  function handlePressBackButton() {
    navigation.goBack();
  }

  return (
    <Container isPositive={isPositive}>
      <ButtonIcon onPress={handlePressBackButton}>
        <Icon color={isPositive ? COLORS.GREEN.DARK : COLORS.RED.DARK} />
      </ButtonIcon>
      <Highlight
        title={`${percentage}%`}
        subtitle="das refeições dentro da dieta"
      />
    </Container>
  );
}
