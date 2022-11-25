import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface ContainerStyleProps {
  isPositive: boolean;
}

export const Container = styled(SafeAreaView)<ContainerStyleProps>`
  flex: 1;
  flex-direction: column;

  height: 100%;
  width: 100%;

  background-color: ${({ theme, isPositive }) =>
    isPositive ? theme.COLORS.GREEN.LIGHT : theme.COLORS.RED.LIGHT};
`;

export const HeaderContainer = styled.View`
  height: 20%;
  width: max-content;
`;

export const ContentForm = styled.View`
  flex: 1;
  z-index: 2;

  border-top-right-radius: 24px;
  border-top-left-radius: 24px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    shadow-color: ${theme.COLORS.GRAY["700"]};
  `}

  shadow-opacity: 1;
  shadow-radius: 2px;

  padding: 20px;

  align-items: stretch;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.SM}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY[600]};
  `}

  align-self: center;

  margin-bottom: 24px;
`;

export const Row = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;
