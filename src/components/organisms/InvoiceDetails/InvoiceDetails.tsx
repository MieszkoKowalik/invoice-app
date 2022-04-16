import { formatDateString } from "helpers/formatDateString";
import { formatNumberToGBP } from "helpers/formatNumberToGBP";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import { useTheme } from "styled-components";
import { Invoice } from "types/Invoice";
import {
  Wrapper,
  StyledId,
  ItemsWrapper,
  TotalWrapper,
  InfoWrapper,
  Heading,
  TopWrapper,
  InfoText,
  TotalText,
  TotalHeading,
  PrimaryInfo,
  MiddleWrapper,
  DatesWrapper,
  ItemWrapper,
  ItemText,
  ItemHeader,
  SentTo,
} from "./InvoiceDetails.style";

type InvoiceDetailsProps = {
  invoice: Invoice;
};

const InvoiceDetails = ({ invoice }: InvoiceDetailsProps) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.m);

  return (
    <Wrapper>
      <TopWrapper>
        <InfoWrapper smallGap as="hgroup">
          <StyledId as="h1">{invoice.id}</StyledId>
          <Heading as="h2">Graphic Design</Heading>
        </InfoWrapper>

        <div>
          <InfoText>{invoice.senderAddress.street}</InfoText>
          <InfoText>{invoice.senderAddress.city}</InfoText>
          <InfoText>{invoice.senderAddress.postCode}</InfoText>
          <InfoText>{invoice.senderAddress.country}</InfoText>
        </div>
      </TopWrapper>

      <MiddleWrapper>
        <DatesWrapper>
          <InfoWrapper>
            <Heading>Invoice Date</Heading>
            <PrimaryInfo>{formatDateString(invoice.createdAt)}</PrimaryInfo>
          </InfoWrapper>

          <InfoWrapper>
            <Heading>Paymenet Due</Heading>
            <PrimaryInfo>{formatDateString(invoice.paymentDue)}</PrimaryInfo>
          </InfoWrapper>
        </DatesWrapper>

        <InfoWrapper>
          <Heading>Bill to</Heading>
          <InfoWrapper smallGap>
            <PrimaryInfo>{invoice.clientName}</PrimaryInfo>
            <div>
              <InfoText>{invoice.clientAddress.street}</InfoText>
              <InfoText>{invoice.clientAddress.city}</InfoText>
              <InfoText>{invoice.clientAddress.postCode}</InfoText>
              <InfoText>{invoice.clientAddress.country}</InfoText>
            </div>
          </InfoWrapper>
        </InfoWrapper>

        <SentTo>
          <Heading>Sent to</Heading>
          <PrimaryInfo>{invoice.clientEmail}</PrimaryInfo>
        </SentTo>
      </MiddleWrapper>

      <ItemsWrapper>
        {isTablet && (
          <>
            <ItemHeader>ItemName</ItemHeader>
            <ItemHeader align="center">QTY.</ItemHeader>
            <ItemHeader align="right">Price</ItemHeader>
            <ItemHeader align="right">Total</ItemHeader>
          </>
        )}
        {invoice.items.length
          ? invoice.items.map((item) =>
              isTablet ? (
                <React.Fragment key={item.name}>
                  <ItemText>{item.name}</ItemText>
                  <ItemText align="center">{item.quantity}</ItemText>
                  <ItemText align="right">
                    {formatNumberToGBP(item.price)}
                  </ItemText>
                  <ItemText align="right">
                    {formatNumberToGBP(item.total)}
                  </ItemText>
                </React.Fragment>
              ) : (
                <ItemWrapper key={item.name}>
                  <InfoWrapper smallGap>
                    <ItemText>{item.name}</ItemText>
                    <InfoText isBold>
                      {item.quantity} x {formatNumberToGBP(item.price)}
                    </InfoText>
                  </InfoWrapper>
                  <ItemText>{formatNumberToGBP(item.total)}</ItemText>
                </ItemWrapper>
              )
            )
          : null}
      </ItemsWrapper>

      <TotalWrapper>
        <TotalHeading>Amount Due</TotalHeading>
        <TotalText>{formatNumberToGBP(invoice.total)}</TotalText>
      </TotalWrapper>
    </Wrapper>
  );
};

export default InvoiceDetails;
