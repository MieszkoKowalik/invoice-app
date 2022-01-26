import styled from "styled-components";
import { darkTheme } from "assets/styles/themes";
export const Wrapper = styled.div`
  aspect-ratio: 1;
  width: 32px;
  background-color: ${darkTheme.colors.neutral[600]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 40px;
  }
  svg {
    height: 70%;
    fill: ${darkTheme.colors.neutral[300]};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
