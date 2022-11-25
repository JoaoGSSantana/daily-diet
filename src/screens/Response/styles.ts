import { Text } from "react-native";
import styled, { css } from "styled-components/native";

export type ResponseStyleTypeProps = "SUCCESS" | "FAILURE";

type TitleStyleProps = {
  type: ResponseStyleTypeProps;
};

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text<TitleStyleProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONTS_SIZES.XLG}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${type === "SUCCESS"
      ? theme.COLORS.GREEN.DARK
      : theme.COLORS.RED.DARK};
  `}
`;

export const Subtitle = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.MD}px;
    font-family: ${theme.FONTS_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY["700"]};
  `}
  margin-top: 8px;
  margin-bottom: 24px;

  text-align: center;
`;

export const SubtitleBold = styled(Text)`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONTS_SIZES.MD}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY["700"]};
  `}
`;

export const Vector = styled.Image`
  height: 288px;
  width: 224px;
`;
