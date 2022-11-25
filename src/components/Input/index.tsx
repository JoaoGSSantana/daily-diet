import { RefObject } from "react";
import { TextInputProps, TextInput as TextInputPrimitive } from "react-native";
import { Container, TextInput, Label } from "./styles";

type Props = TextInputProps & {
  label: string;
  inputRef?: RefObject<TextInputPrimitive>;
};

export function Input({ label, inputRef, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput ref={inputRef} {...rest} />
    </Container>
  );
}
