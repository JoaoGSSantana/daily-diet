import { ModalProps } from "react-native";

import { Button } from "@components/Button";

import {
  Container,
  ContentContainer,
  Text,
  ButtonContainer,
  Background,
} from "./styles";

type Props = ModalProps & {
  onCancel: () => void;
  onConfirm: () => void;
};

export function DeleteModal({ onCancel, onConfirm, ...rest }: Props) {
  const buttonStyle = { width: "50%" };

  return (
    <Container animationType="fade" transparent {...rest}>
      <Background>
        <ContentContainer>
          <Text>Deseja realmente excluir o {"\n"} registro da refeição?</Text>
          <ButtonContainer>
            <Button
              style={buttonStyle}
              title="Cancelar"
              type="SECONDARY"
              onPress={onCancel}
            />
            <Button
              style={[buttonStyle, { marginLeft: 8 }]}
              title="Sim, excluir"
              type="PRIMARY"
              onPress={onConfirm}
            />
          </ButtonContainer>
        </ContentContainer>
      </Background>
    </Container>
  );
}
