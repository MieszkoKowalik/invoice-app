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
import { formatDateString } from "helpers/formatDateString";
import { formatNumberToGBP } from "helpers/formatNumberToGBP";

type Props = {
  invoice: Invoice;
};

const InvoiceCard = ({ invoice }: Props) => {
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
