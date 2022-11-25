import { View } from "react-native";
import styled, { css } from "styled-components/native";

type CircleProps = {
  onTheDiet?: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const ContentForm = styled.ScrollView`
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

  padding: 24px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.LG}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY["700"]};
  `}

  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Information = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.MD}px;
    font-family: ${theme.FONTS_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY["700"]};
  `}

  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.SM}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY["700"]};
  `}

  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Tag = styled.View`
  flex-direction: row;

  align-items: center;

  padding-left: 12px;
  padding-right: 12px;

  margin-top: 8px;

  width: 132px;
  height: 34px;

  border-radius: 999px;

  background-color: ${({ theme }) => theme.COLORS.GRAY["200"]};
`;

export const TagText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.XSM}px;
    font-family: ${theme.FONTS_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY["700"]};
  `}
`;

export const Circle = styled(View)<CircleProps>`
  width: 8px;
  height: 8px;

  border-radius: 100px;

  margin-right: 8px;

  background-color: ${({ theme, onTheDiet }) =>
    onTheDiet ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK};
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: space-between;

  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
