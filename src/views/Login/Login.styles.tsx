import styled from "styled-components";

export const LoginWrapper = styled.form`
  padding: 32px;
  width: 100%;
  max-width: 450px;
  place-self: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
`;
