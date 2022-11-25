import { View } from "react-native";
import styled, { css } from "styled-components/native";

export interface CardProps {
  variant?: "DEFAULT" | "CONDITIONS";
  condition?: "POSITIVE" | "NEGATIVE";
}

export const Number = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY[700]};
  `}
`;

export const What = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.SM}px;
    font-family: ${theme.FONTS_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY[700]};
  `}

  text-align: center;
`;

export const Card = styled(View)<CardProps>`
  flex: 1;
  max-height: 90px;

  padding: 16px;

  margin-bottom: 12px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background-color: ${({ theme, condition, variant }) =>
    variant === "CONDITIONS"
      ? condition === "POSITIVE"
        ? theme.COLORS.GREEN.LIGHT
        : theme.COLORS.RED.LIGHT
      : theme.COLORS.GRAY[200]};
`;
