import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};

  align-items: center;
  justify-content: center;
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs(
  ({ theme, size }) => ({
    color: theme.COLORS.GREEN.DARK,
    size: size,
  })
)``;
