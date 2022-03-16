import { useState, useEffect } from "react";
import InvoiceForm from "components/organisms/InvoiceForm/InvoiceForm";
import {
  DashboardWrapper,
  InvoiceModal,
  Topbar,
  NewInvoiceButton,
  StyledTitle,
} from "./Dashboard.styles";
import { Invoice } from "types";
import { db } from "../../firebase";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import InvoiceList from "components/organisms/InvoiceList/InvoiceList";
import { Text } from "components/atoms/Text/Text";
import useMediaQuery from "hooks/useMediaQuery";
import { getInvoiceLenghtMessage } from "helpers/getInvoiceLengthMessage";
import { useTheme } from "styled-components";

type DashboardProps = {};

const Dashboard = (props: DashboardProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const addInvoice = async (data: Invoice) => {
    try {
      await addDoc(collection(db, "invoices"), data);
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
    });

    return () => unsub();
  }, []);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.m);

  return (
    <DashboardWrapper>
      <Topbar>
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
