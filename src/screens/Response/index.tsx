import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "@components/Button";

import {
  Container,
  Title,
  Subtitle,
  ResponseStyleTypeProps,
  Vector,
  SubtitleBold,
} from "./styles";

import success from "@assets/success.png";
import failure from "@assets/failure.png";

import Texts from "@mocks/texts";

type RouteProps = {
  type: ResponseStyleTypeProps;
};

export function Response() {
  const navigation = useNavigation();
  const routes = useRoute();

  const { type } = routes.params as RouteProps;

  const { title, subtitle } = Texts.Pages.Response;

  function handleGoBackHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title type={type}>{title[type]}</Title>
      <Subtitle>
        {subtitle[type].textInit}
        <SubtitleBold>{subtitle[type].highlighted}</SubtitleBold>
        {subtitle[type].textEnd}
      </Subtitle>
      <Vector source={type === "SUCCESS" ? success : failure} />
      <Button
        style={{ width: "50%", marginTop: 24 }}
        title="Ir para a página inicial"
        onPress={handleGoBackHome}
      />
    </Container>
  );
}
