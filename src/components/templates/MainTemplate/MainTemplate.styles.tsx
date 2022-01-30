import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr;
  @media ${({ theme }) => theme.breakpoints.xl} {
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
  }
  main {
    display: grid;
    padding: 24px;
  }
`;
