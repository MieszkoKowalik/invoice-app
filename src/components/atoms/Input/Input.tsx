import styled from "styled-components";

export const Input = styled.input`
  padding: 16px 20px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
  caret-color: ${({ theme }) => theme.colors.primary[500]};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
  &:invalid {
    border-color: ${({ theme }) => theme.colors.error[500]};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[900]};
    opacity: 0.6;
  }
`;
