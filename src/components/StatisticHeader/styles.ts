import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { ArrowLeft } from "phosphor-react-native";

export type StatisticHeaderStyleProps = {
  isPositive: boolean;
};

export const Container = styled.View<StatisticHeaderStyleProps>`
  height: 20%;
  width: 100%;

  flex-direction: row;

  padding: 24px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, isPositive }) =>
    isPositive ? theme.COLORS.GREEN.LIGHT : theme.COLORS.RED.LIGHT};
`;

export const ButtonIcon = styled(TouchableOpacity)`
  height: 24px;
  width: 8%;

  align-items: center;
  justify-content: center;

  position: absolute;
  left: 24px;
  top: 24px;
`;

export const Icon = styled(ArrowLeft).attrs(() => ({
  size: 24,
  weight: "bold",
}))``;
