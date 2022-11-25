import { TouchableOpacityProps } from "react-native";
import { Container, Name, Time, Circle, Line } from "./styles";

type Props = TouchableOpacityProps & {
  name: string;
  hours: string;
  onTheDiet: boolean;
};

export function MealCard({ name, hours, onTheDiet = false, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Time>{hours}</Time>
      <Line />
      <Name>{name}</Name>
      <Circle onTheDiet={onTheDiet} />
    </Container>
  );
}
