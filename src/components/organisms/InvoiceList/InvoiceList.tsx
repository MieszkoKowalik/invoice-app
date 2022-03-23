import { Invoice } from "types";
import InvoiceCard from "components/molecules/InvoiceListCard/InvoiceCard";
import { StyledUl, StyledLink } from "./InvoiceList.styles";
import EmptyList from "components/molecules/EmptyList/EmptyList";
import { motion } from "framer-motion";

type InvoiceListProps = {
  invoices: Invoice[];
};

const list = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

const InvoiceList = ({ invoices }: InvoiceListProps) => {
  return (
    <>
      {invoices.length ? (
        <StyledUl
          as={motion.ul}
          variants={list}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {invoices.map((invoice: Invoice) => {
            return (
              <motion.li key={invoice.id} variants={item}>
                <StyledLink to={`invoice/${invoice.id}`}>
                  <InvoiceCard invoice={invoice} />
                </StyledLink>
              </motion.li>
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
