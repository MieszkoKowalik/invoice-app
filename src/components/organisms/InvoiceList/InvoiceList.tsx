import { Invoice } from "types";
import InvoiceCard from "components/molecules/InvoiceListCard/InvoiceCard";
import { StyledUl, StyledLink } from "./InvoiceList.styles";
import EmptyList from "components/molecules/EmptyList/EmptyList";
import { motion, Variants } from "framer-motion";

type InvoiceListProps = {
  invoices: Invoice[];
};

const listVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const InvoiceList = ({ invoices }: InvoiceListProps) => {
  return (
    <>
      {invoices.length ? (
        <StyledUl
          variants={listVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {invoices.map((invoice: Invoice) => {
            return (
              <motion.li key={invoice.id} variants={itemVariants}>
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
