import { View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(View)`
  width: 100%;
  padding: 12px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES["2XL"]}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY[700]};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.SM}px;
    font-family: ${theme.FONTS_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY[600]};
  `}
`;
