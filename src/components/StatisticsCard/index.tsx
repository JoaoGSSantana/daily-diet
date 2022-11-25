import { TouchableOpacityProps } from "react-native";

import { Highlight } from "@components/Highlight";

import { Container, ArrowIcon } from "./styles";
import { useTheme } from "styled-components";

type Props = TouchableOpacityProps & {
  title: number;
  subtitle: string;
};

export function StatisticsCard({ title = 0, subtitle, ...rest }: Props) {
  const { COLORS } = useTheme();
  const onTheDiet = title >= 50;

  return (
    <Container {...rest} onTheDiet={onTheDiet}>
      <Highlight title={`${title}%`} subtitle={subtitle} />
      <ArrowIcon color={onTheDiet ? COLORS.GREEN.DARK : COLORS.RED.DARK} />
    </Container>
  );
}
