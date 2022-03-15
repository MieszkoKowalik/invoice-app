import useMediaQuery from "hooks/useMediaQuery";
import { useTheme } from "styled-components";
import { Invoice } from "types";
import { ReactComponent as ArrowRight } from "assets/images/icon-arrow-right.svg";
import {
  Wrapper,
  IdSpan,
  DateSpan,
  ClientSpan,
  AmountSpan,
  StyledBadge,
} from "./InvoiceCard.styles";
import { formatNumberToGBP } from "helpers/formatNumberToGBP";
import { formatDateString } from "helpers/formatDateString";

type InvoiceCardProps = {
  invoice: Invoice;
};

const InvoiceCard = ({ invoice }: InvoiceCardProps) => {
  const theme = useTheme();
  const matchesBreakpointM = useMediaQuery(theme.breakpoints.m);

  return (
    <Wrapper>
      <IdSpan>{invoice.id}</IdSpan>
      <DateSpan> Due {formatDateString(invoice.paymentDue)}</DateSpan>
      <ClientSpan>{invoice.clientName}</ClientSpan>
      <AmountSpan>{formatNumberToGBP(invoice.total)}</AmountSpan>
      <StyledBadge variant={invoice.status} />

      {matchesBreakpointM && <ArrowRight />}
    </Wrapper>
  );
};

export default InvoiceCard;
