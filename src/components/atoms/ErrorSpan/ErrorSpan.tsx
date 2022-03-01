import styled from "styled-components";

export const ErrorSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  letter-spacing: -0.021em;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.danger[700]};
`;
