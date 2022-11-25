import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type SelectStyleTypeProps = "PRIMARY" | "SECONDARY";

export type SelectStyleProps = {
  type: SelectStyleTypeProps;
  isSelected?: boolean;
  spaceBetweenSelect?: boolean;
};

export const Container = styled(TouchableOpacity)<SelectStyleProps>`
  flex: 1;

  flex-direction: row;

  height: 50px;

  align-items: center;
  justify-content: center;

  border-radius: 6px;

  ${({ spaceBetweenSelect }) => spaceBetweenSelect && "margin-left: 8px"}

  background-color: ${({ theme }) => theme.COLORS.GRAY["200"]};
  ${({ theme, isSelected, type }) =>
    isSelected &&
    css`
      background-color: ${
        type === "PRIMARY" ? theme.COLORS.GREEN.LIGHT : theme.COLORS.RED.LIGHT
      }
      border: 1px solid ${
        type === "PRIMARY" ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK
      };
    `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY["700"]};
    font-size: ${theme.FONTS_SIZES.SM}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
  `}
`;

export const Circle = styled.View<SelectStyleProps>`
  height: 8px;
  width: 8px;

  border-radius: 100px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK};

  margin-right: 8px;
`;
