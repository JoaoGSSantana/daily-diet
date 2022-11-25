import { MaskedTextInput as MaskedTextInputPrimitive } from "react-native-mask-text";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-self: stretch;

  margin-top: 12px;
  margin-bottom: 12px;
`;

export const MaskedTextInput = styled(MaskedTextInputPrimitive).attrs(
  ({ theme }) => ({
    minHeight: 50,
    minWidth: "48%",

    paddingLeft: 12,

    fontSize: theme.FONTS_SIZES.MD,
    fontFamily: theme.FONTS_FAMILY.BOLD,
    color: theme.COLORS.GRAY["700"],

    borderColor: theme.COLORS.GRAY["300"],
    borderWidth: 1,
    borderRadius: 6,
  })
)``;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY["700"]};
    font-size: ${theme.FONTS_SIZES.SM}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
  `}

  margin-bottom: 8px;
`;
