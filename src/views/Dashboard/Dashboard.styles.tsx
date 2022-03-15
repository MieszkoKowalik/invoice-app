import styled from "styled-components";
import Modal from "components/organisms/Modal/Modal";

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
