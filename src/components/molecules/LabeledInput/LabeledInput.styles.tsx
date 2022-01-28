import styled, { css } from "styled-components";

interface Props {
  error?: string;
}

export const StyledLabel = styled.label<Props>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.neutral[600]};
  position: relative;
  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.danger[700]};
    `}
  span {
    font-weight: 600;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
