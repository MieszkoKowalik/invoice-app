import styled from "styled-components";
import { ContentWrapper } from "components/molecules/ContentWrapper/ContentWrapper";

export const Wrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  @media ${({ theme }) => theme.breakpoints.m} {
    padding: 20px 32px;
    margin-bottom: 24px;
  }
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
  gap: 16px;

  @media ${({ theme }) => theme.breakpoints.m} {
    flex-grow: 0;
  }
`;
