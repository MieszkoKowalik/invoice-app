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
  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.danger[700]};
    `}
`;
export const ErrorSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 600;
`;
export const LabelWrapper = styled.span`
  display: flex;
  gap: 5px;
  align-items: baseline;
  justify-content: space-between;
`;
