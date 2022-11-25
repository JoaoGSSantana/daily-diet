import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

import styled, { css } from "styled-components/native";

export type HeaderStyleTypeProps = "DEFAULT" | "POSITIVE" | "NEGATIVE";

type HeaderProps = {
  type: HeaderStyleTypeProps;
};

export const Container = styled.View<HeaderProps>`
  flex-direction: row;

  width: 100%;
  height: 132px;

  padding: 24px;

  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "POSITIVE"
      ? theme.COLORS.GREEN.LIGHT
      : type === "NEGATIVE"
      ? theme.COLORS.RED.LIGHT
      : theme.COLORS.GRAY[300]};

  margin-bottom: -22px;
`;

export const Title = styled.Text`
  width: 92%;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.LG}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY[700]};
  `}
`;

export const ButtonIcon = styled(TouchableOpacity)`
  height: 24px;
  width: 8%;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY[700],
  size: 24,
  weight: "bold",
}))``;
