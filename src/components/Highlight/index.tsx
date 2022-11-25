import { ViewProps } from "react-native";
import { Container, Title, Subtitle } from "./styles";

type Props = ViewProps & {
  title: string;
  subtitle: string;
};

export function Highlight({ title, subtitle, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
