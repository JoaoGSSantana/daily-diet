import styled, { css } from "styled-components/native";

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

export const DateAndHourForm = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.SM}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY["700"]};
  `}

  margin-top: 12px;
`;

export const SelectContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  margin-top: 8px;
  margin-bottom: 24px;
`;

export const Footer = styled.View`
  align-items: center;

  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
