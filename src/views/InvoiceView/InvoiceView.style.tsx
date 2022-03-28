import styled from "styled-components";
import { Link } from "react-router-dom";
import { typography } from "assets/styles/typography";

export const StyledLink = styled(Link)`
  ${typography.s}
  color:${({ theme }) => theme.colors.neutral[900]};
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 24px;
`;
