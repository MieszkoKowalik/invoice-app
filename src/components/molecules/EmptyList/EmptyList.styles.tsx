import styled from "styled-components";

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
    letter-spacing: -0.63px;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.neutral[900]};
  }
  p {
    align-self: start;
    font-size: ${({ theme }) => theme.fontSize.s};
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.colors.neutral[600]};
  }
  span {
    font-weight: bold;
  }
`;
