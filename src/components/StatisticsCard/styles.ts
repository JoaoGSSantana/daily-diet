import { TouchableOpacity } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";

import styled from "styled-components/native";

type ContainerStyleProps = {
  onTheDiet: boolean;
};

export const Container = styled(TouchableOpacity)<ContainerStyleProps>`
  flex-direction: row;
  padding: 16px 20px;

  border-radius: 8px;
  background-color: ${({ theme, onTheDiet }) =>
    onTheDiet ? theme.COLORS.GREEN.LIGHT : theme.COLORS.RED.LIGHT};

  align-items: center;
  justify-content: center;
`;

export const ArrowIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  weight: "bold",
}))`
  align-self: flex-start;
`;
