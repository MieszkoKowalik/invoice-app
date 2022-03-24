import Badge from "components/atoms/Badge/Badge";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  display: grid;
  grid-template-rows: auto repeat(3, 24px);
  grid-template-areas:
    "id client"
    "... ..."
    "date badge"
    "amount badge";
  justify-content: space-between;

  @media ${({ theme }) => theme.breakpoints.m} {
    padding: 16px 24px;
    grid-template-rows: auto;
    align-items: center;
    grid-auto-flow: column;
    justify-content: start;
    grid-template-columns: 87px 175px 1fr auto auto;
    grid-template-areas: "id date client amount badge";
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    padding: 16px 24px 16px 32px;
  }
`;

export const IdSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-weight: 700;

  &::before {
    content: "#";
    color: ${({ theme }) => theme.colors.primary[300]};
  }
`;

export const DateSpan = styled.span`
  grid-area: date;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const AmountSpan = styled.span`
  grid-area: amount;
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-weight: 700;
`;

export const ClientSpan = styled.span`
  grid-area: client;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

export const StyledBadge = styled(Badge)`
  grid-area: badge;
  align-self: center;

  @media ${({ theme }) => theme.breakpoints.m} {
    margin-left: 40px;
    margin-right: 20px;
  }
`;
