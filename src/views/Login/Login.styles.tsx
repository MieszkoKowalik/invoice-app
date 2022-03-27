import styled from "styled-components";
import { motion } from "framer-motion";

export const LoginWrapper = styled(motion.div)`
  padding: 32px;
  width: 100%;
  max-width: 450px;
  place-self: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[50]};

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
  }
`;
