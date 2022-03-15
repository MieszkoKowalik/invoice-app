import styled from "styled-components";
import { darkTheme } from "assets/styles/themes";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[800]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  @media ${({ theme }) => theme.breakpoints.xl} {
    flex-direction: column;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  } ;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors.neutral[400]};

  @media ${({ theme }) => theme.breakpoints.xl} {
    height: unset;
    border: unset;
    padding: 24px;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.neutral[400]};
  } ;
`;

export const Panel = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 23px;

  @media ${({ theme }) => theme.breakpoints.xl} {
    height: unset;
    width: 100%;
    flex-direction: column;
  } ;
`;

export const LogoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  font-size: 0;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 0%;
    width: 100%;
    height: 50%;
    border-top-left-radius: 20px;
    background-color: ${darkTheme.colors.primary[700]};
  }

  svg {
    width: 28px;
    height: 26px;
  }

  @media ${({ theme }) => theme.breakpoints.m} {
    width: 80px;
    height: 80px;

    svg {
      width: 31px;
      height: 29px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 103px;
    height: 103px;

    svg {
      width: 40px;
      height: 38px;
    }
  }
`;
