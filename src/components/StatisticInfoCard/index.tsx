import { ViewProps } from "react-native";
import { Card, Number, What, CardProps } from "./styles";

type Props = {
  number: number;
  what: String;
} & ViewProps &
  CardProps;

export function StatisticInfoCard({
  number,
  what,
  condition = "POSITIVE",
  variant = "DEFAULT",
  ...rest
}: Props) {
  return (
    <Card condition={condition} variant={variant} {...rest}>
      <Number>{`${number}`}</Number>
      <What>{what}</What>
    </Card>
  );
}
