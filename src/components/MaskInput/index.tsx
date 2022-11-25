import { RefObject } from "react";
import { TextInput as TextInputPrimitive } from "react-native";
import { MaskedTextInputProps } from "react-native-mask-text";
import { Container, MaskedTextInput, Label } from "./styles";

type Props = MaskedTextInputProps & {
  label: string;
  inputRef?: RefObject<TextInputPrimitive>;
};

export function MaskInput({ label, inputRef, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <MaskedTextInput ref={inputRef} {...rest} />
    </Container>
  );
}
