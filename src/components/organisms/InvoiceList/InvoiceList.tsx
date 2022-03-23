import { Invoice } from "types";
import InvoiceCard from "components/molecules/InvoiceListCard/InvoiceCard";
import { StyledUl, StyledLink } from "./InvoiceList.styles";
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
                <StyledLink to={`invoice/${invoice.id}`}>
                  <InvoiceCard invoice={invoice} />
                </StyledLink>
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
