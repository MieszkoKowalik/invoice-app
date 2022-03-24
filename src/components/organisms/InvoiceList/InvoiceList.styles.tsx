import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const StyledUl = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
