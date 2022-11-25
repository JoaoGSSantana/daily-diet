import { View, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type CircleProps = {
  onTheDiet?: boolean;
};

export const Container = styled(TouchableOpacity)`
  flex-direction: row;

  align-items: center;

  width: 100%;
  height: 50px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY["300"]};
  border-radius: 6px;

  padding-right: 12px;
  padding-left: 12px;

  margin-bottom: 8px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.XSM}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY["700"]};
  `}
`;

export const Line = styled.View`
  width: 8px;
  height: 25px;

  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.COLORS.GRAY["300"]};

  margin-left: 8px;
`;

export const Name = styled.Text`
  flex: 1;

  margin-left: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.MD}px;
    font-family: ${theme.FONTS_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY["600"]};
  `}
`;

export const Circle = styled(View)<CircleProps>`
  width: 14px;
  height: 14px;

  border-radius: 100px;

  background-color: ${({ theme, onTheDiet }) =>
    onTheDiet ? theme.COLORS.GREEN.MID : theme.COLORS.RED.MID};
`;
