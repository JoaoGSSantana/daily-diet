import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import { IconContext } from "phosphor-react-native";

import {
  Container,
  ButtonTitle,
  ButtonTypeStyleProps,
  IconView,
} from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  title: string;
  icon?: ReactNode;
};

export function Button({ type = "PRIMARY", title, icon, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container type={type} {...rest}>
      {icon && (
        <IconContext.Provider
          value={{
            size: 18,
            color: type === "PRIMARY" ? COLORS.WHITE : COLORS.GRAY[700],
          }}
        >
          <IconView>{icon}</IconView>
        </IconContext.Provider>
      )}
      <ButtonTitle type={type}>{title}</ButtonTitle>
    </Container>
  );
}
