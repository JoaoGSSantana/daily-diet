import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type ButtonProps = TouchableOpacityProps & {
  type: ButtonTypeStyleProps;
};

type ButtonTitleProps = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex-direction: row;

  height: 50px;
  width: 100%;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY[600] : "transparent"};

  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY[600] : theme.COLORS.GRAY[700]};
`;

export const ButtonTitle = styled.Text<ButtonTitleProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONTS_SIZES.MD}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY[700]};
  `}
`;

export const IconView = styled.View`
  align-items: center;
  justify-content: center;

  margin-right: 8px;
`;
