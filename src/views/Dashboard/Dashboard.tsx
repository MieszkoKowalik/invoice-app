import { useState, useEffect } from "react";
import InvoiceForm from "components/organisms/InvoiceForm/InvoiceForm";
import {
  DashboardWrapper,
  InvoiceModal,
  Topbar,
  NewInvoiceButton,
  StyledTitle,
} from "./Dashboard.styles";
import { Invoice } from "types/Invoice";
import { db } from "../../firebase";
import { collection, onSnapshot, setDoc, doc } from "firebase/firestore";
import InvoiceList from "components/organisms/InvoiceList/InvoiceList";
import { Text } from "components/atoms/Text/Text";
import useMediaQuery from "hooks/useMediaQuery";
import { getInvoiceLenghtMessage } from "helpers/getInvoiceLengthMessage";
import { useTheme } from "styled-components";
import { Variants } from "framer-motion";
import Loader from "components/molecules/Loader/Loader";

type DashboardProps = {};

const topbarVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: {
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
    },
  },
};

const Dashboard = (props: DashboardProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const addInvoice = async (data: Invoice) => {
    try {
      await setDoc(doc(db, "invoices", data.id), data);
    } catch (e) {
      console.error("Error while adding document: ", e);
    }
  };

  const onSubmit = (data: Invoice) => {
    addInvoice(data);
    closeModal();
  };

  useEffect(() => {
    const invoicesRef = collection(db, "invoices");
    const unsub = onSnapshot(invoicesRef, (querySnapshot) => {
      const invoices = querySnapshot.docs.map(
        (invoice) => invoice.data() as Invoice
      );
      console.log(invoices);
      setInvoices(invoices);
      if (isLoading) {
        setIsLoading(false);
      }
    });

    return () => unsub();
  }, [isLoading]);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.m);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <DashboardWrapper>
      <Topbar
        variants={topbarVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div>
          <StyledTitle>Invoices</StyledTitle>
          <Text>{getInvoiceLenghtMessage(invoices.length, isTablet)}</Text>
        </div>

        <NewInvoiceButton onClick={openModal} variant="primary">
          New{isTablet && "  Invoice"}
        </NewInvoiceButton>
      </Topbar>

      <InvoiceModal isOpen={modalIsOpen} closeModal={closeModal}>
        <InvoiceForm onSubmit={onSubmit} onDiscard={closeModal} />
      </InvoiceModal>

      <InvoiceList invoices={invoices} />
    </DashboardWrapper>
  );
};

export default Dashboard;
