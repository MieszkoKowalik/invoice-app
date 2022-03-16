import { typography } from "assets/styles/typography";
import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.neutral[900]};
  ${typography.l};

  @media ${({ theme }) => theme.breakpoints.m} {
    ${typography.xxl}
  }
`;
