import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  height: 10%;
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const BorderImage = styled.View`
  height: 48px;
  width: 48px;

  align-items: center;
  justify-content: center;

  border-width: 2px;
  border-radius: 100px;
  border-color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;

export const Avatar = styled.Image`
  height: 48px;
  width: 48px;

  align-items: center;
  justify-content: center;

  border-width: 2px;
  border-radius: 100px;
  border-color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;
