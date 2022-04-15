import styled from "styled-components";
import { Link } from "react-router-dom";
import { typography } from "assets/styles/typography";

export const StyledLink = styled(Link)`
  ${typography.s}
  width: max-content;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 32px;
  max-width: 730px;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.m} {
    margin-top: 48px;
  }

  @media ${({ theme }) => theme.breakpoints.l} {
    margin-top: 64px;
  }
`;

export const ControllerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
`;
