import { TouchableOpacityProps } from "react-native";
import { Container, Title, Circle, SelectStyleProps } from "./styles";

type Props = SelectStyleProps &
  TouchableOpacityProps & {
    title: string;
  };

export function Select({
  isSelected,
  title,
  type = "PRIMARY",
  ...rest
}: Props) {
  return (
    <Container type={type} isSelected={isSelected} {...rest}>
      <Circle type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
