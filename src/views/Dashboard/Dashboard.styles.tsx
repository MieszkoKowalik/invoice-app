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
