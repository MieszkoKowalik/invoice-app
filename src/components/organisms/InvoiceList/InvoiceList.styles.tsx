import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
