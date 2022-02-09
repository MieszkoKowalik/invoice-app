import { Button } from "components/atoms/Button/Button";
import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 24px 0px 24px 24px;
  color: ${({ theme }) => theme.colors.neutral[900]};
  height: 100%;
  @media ${({ theme }) => theme.breakpoints.m} {
    padding: 56px 32px 56px 56px;
  }
  h2 {
    margin-bottom: 24px;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.neutral[900]};
  }

  form {
    height: calc(100% - 140px);
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 40px;

    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.neutral[300]};
      border-radius: 4px;
    }
  }
`;

export const StyledFieldset = styled.fieldset`
  border: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media ${({ theme }) => theme.breakpoints.m} {
    grid-template-columns: repeat(6, 1fr);
  }
  legend {
    margin-bottom: 24px;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.primary[700]};
    font-weight: 700;
  }
`;

export const FromFieldset = styled(StyledFieldset)`
  grid-template-areas:
    "street street "
    "city  post"
    "country country";
  @media ${({ theme }) => theme.breakpoints.m} {
    grid-template-areas:
      "street street street street street street"
      "city city post post country country";
  }
`;
export const ToFieldset = styled(StyledFieldset)`
  grid-template-areas:
    "name name "
    "email email"
    "street street"
    "city  post"
    "country country"
    "invoice invoice"
    "payment payment"
    "project project";
  @media ${({ theme }) => theme.breakpoints.m} {
    grid-template-areas:
      "name name name name name name"
      "email email email email email email"
      "street street street street street street"
      "city city post post country country"
      "invoice invoice invoice payment payment payment"
      "project project project project project project";
  }
`;

interface GridCellProps {
  area: string;
}

export const GridCell = styled.div<GridCellProps>`
  grid-area: ${({ area }) => area};
`;
export const ItemsFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  legend {
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 700;
  }

  li {
    margin-bottom: 48px;
    display: grid;
    grid-template-areas:
      "name name name name"
      "qty price total btn";
    grid-template-columns: minmax(60px, 1fr) minmax(80px, 1fr) 1fr auto;
    align-items: end;
    gap: 24px 16px;
    @media ${({ theme }) => theme.breakpoints.m} {
      grid-template-areas: "name qty price total btn";
      grid-template-columns: 1fr 85px 100px 80px auto;
      margin-bottom: 16px;
    }
  }
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 48px;
  display: flex;
  align-items: center;
  fill: ${({ theme }) => theme.colors.neutral[400]};
  &:hover {
    fill: ${({ theme }) => theme.colors.danger[500]};
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: ${({ theme }) => theme.fontSize.s};

  div {
    font-weight: 700;
    height: 48px;
    line-height: 48px;
  }
`;

export const Controls = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  gap: 7px;
  padding: 24px;

  @media${({ theme }) => theme.breakpoints.m} {
    padding: 32px 56px;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    left: 103px;
  } ;
`;

export const StyledButton = styled(Button)`
  margin-right: auto;
`;
