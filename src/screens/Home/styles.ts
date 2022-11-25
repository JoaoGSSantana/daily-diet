import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 12px 24px;
`;

export const ButtonLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY[700]};
    font-family: ${theme.FONTS_FAMILY.REGULAR};
    font-size: ${theme.FONTS_SIZES.MD}px;
  `}

  margin-bottom: 12px;
`;

export const ButtonForm = styled.View`
  width: 100%;

  padding-top: 24px;
  padding-bottom: 24px;
`;

export const TitleHeader = styled.Text`
  margin-top: 8px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.LG}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY["700"]};
    line-height: 20px;
  `}
`;
