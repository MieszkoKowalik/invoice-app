import { typography } from "assets/styles/typography";
import styled from "styled-components";

type TextProps = {
  isBold?: boolean;
  isSecondary?: boolean;
};

export const Text = styled.p<TextProps>`
  color: ${({ theme, isSecondary }) =>
    isSecondary ? theme.colors.neutral[500] : theme.colors.neutral[600]};
  font-weight: ${({ isBold }) => isBold && "700"};
  ${typography.s}
`;
