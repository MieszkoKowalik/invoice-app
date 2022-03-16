import { typography } from "assets/styles/typography";
import styled from "styled-components";
import { Text } from "components/atoms/Text/Text";

export const Wrapper = styled.div`
  max-width: 220px;
  text-align: center;
  justify-self: center;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  align-items: end;

  svg {
    margin-bottom: 40px;

    @media ${({ theme }) => theme.breakpoints.m} {
      margin-bottom: 64px;
    }
  }

  h2 {
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.neutral[900]};
    ${typography.l}
  }

  ${Text} {
    align-self: start;
    max-width: 220px;
  }
`;
