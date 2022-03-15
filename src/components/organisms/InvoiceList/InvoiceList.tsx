import { Invoice } from "types";
import InvoiceCard from "components/molecules/InvoiceListCard/InvoiceCard";
import { StyledUl } from "./InvoiceList.styles";
import EmptyList from "components/molecules/EmptyList/EmptyList";

type InvoiceListProps = {
  invoices: Invoice[];
};

const InvoiceList = ({ invoices }: InvoiceListProps) => {
  return (
    <>
      {invoices.length ? (
        <StyledUl>
          {invoices.map((invoice: Invoice) => {
            return (
              <li key={invoice.id}>
                <InvoiceCard invoice={invoice}></InvoiceCard>
              </li>
            );
          })}
        </StyledUl>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default InvoiceList;