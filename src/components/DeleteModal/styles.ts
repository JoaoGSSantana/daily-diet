import { Modal, Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(Modal)``;

export const Background = styled.View`
  flex: 1;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ContentContainer = styled.View`
  height: 192px;

  margin-left: 24px;
  margin-right: 24px;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 8px;

  align-self: center;

  position: absolute;
  top: ${Dimensions.get("window").height * 0.5 - 96}px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.LG}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY[600]};
    text-align: center;
  `}
`;

export const ButtonContainer = styled.View`
  flex: 1;

  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 100%;

  padding-top: 32px;
`;
