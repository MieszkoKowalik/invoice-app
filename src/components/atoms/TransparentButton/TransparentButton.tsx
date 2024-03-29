import { typography } from "assets/styles/typography";
import styled from "styled-components";

export const TransparentButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral[400]};
  transition: color 0.2s, fill 0.2s;
  ${typography.m}
  :hover {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;
