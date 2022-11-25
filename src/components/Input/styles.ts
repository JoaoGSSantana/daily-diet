import { TextInput as TextInputPrimitive } from "react-native";

import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-self: stretch;

  margin-top: 12px;
  margin-bottom: 12px;
`;

export const TextInput = styled(TextInputPrimitive)`
  min-height: 50px;
  min-width: 48%;

  padding-left: 12px;

  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.MD}px;
    font-family: ${theme.FONTS_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY["700"]};

    border-color: ${theme.COLORS.GRAY["300"]};
    border-width: 1px;
    border-radius: 6px;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY["700"]};
    font-size: ${theme.FONTS_SIZES.SM}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
  `}

  margin-bottom: 8px;
`;
