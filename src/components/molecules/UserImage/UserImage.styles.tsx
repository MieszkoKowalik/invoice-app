import styled from "styled-components";
export const Wrapper = styled.div`
  aspect-ratio: 1;
  width: 32px;
  background-color: ${({ theme }) => theme.colors.neutral[300]};
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
    fill: ${({ theme }) => theme.colors.neutral[600]};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
