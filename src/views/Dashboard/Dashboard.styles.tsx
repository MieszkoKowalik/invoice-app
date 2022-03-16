import styled from "styled-components";
import Modal from "components/organisms/Modal/Modal";
import { Button } from "components/atoms/Button/Button";
import PlusIcon from "assets/images/icon-plus.svg";
import { Title } from "components/atoms/Title/Title";

export const InvoiceModal = styled(Modal)`
  position: fixed;
  top: 72px;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral[100]};

  @media ${({ theme }) => theme.breakpoints.m} {
    max-width: 616px;
    top: 80px;
    border-radius: 0 20px 20px 0;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    top: 0px;
    max-width: 719px;
    padding-left: 103px;
  }
`;

export const DashboardWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  margin: 0 auto;
  max-width: 730px;
`;

export const Topbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;

  @media ${({ theme }) => theme.breakpoints.m} {
    margin-top: 56px;
    margin-bottom: 56px;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    margin-top: 65px;
    margin-bottom: 65px;
  } ;
`;

export const NewInvoiceButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  padding-right: 14px;
  @media ${({ theme }) => theme.breakpoints.m} {
    gap: 16px;
    padding: 8px;
    padding-right: 15px;
  }

  &::before {
    content: ${() => `url(${PlusIcon})`};
    width: 32px;
    height: 32px;
    background-color: #fff;
    display: grid;
    place-items: center;
    font-size: 0;
    border-radius: 50%;
  }
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 4px;

  @media ${({ theme }) => theme.breakpoints.m} {
    margin-bottom: 8px;
  }
`;
