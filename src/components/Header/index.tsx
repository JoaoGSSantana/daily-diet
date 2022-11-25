import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Title,
  Icon,
  HeaderStyleTypeProps,
  ButtonIcon,
} from "./styles";

type Props = {
  type?: HeaderStyleTypeProps;
  title: string;
};

export function Header({ type = "DEFAULT", title }: Props) {
  const navigation = useNavigation();

  function handleGoBackAction() {
    navigation.goBack();
  }

  return (
    <Container type={type}>
      <ButtonIcon onPress={handleGoBackAction}>
        <Icon />
      </ButtonIcon>
      <Title>{title}</Title>
    </Container>
  );
}
