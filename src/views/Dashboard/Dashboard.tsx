import { useState, useEffect } from "react";
import { Button } from "components/atoms/Button/Button";
import InvoiceForm from "components/organisms/InvoiceForm/InvoiceForm";
import { InvoiceModal } from "./Dashboard.styles";
import { Invoice } from "types";
import { db } from "../../firebase";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
interface Props {}
const Dashboard = (props: Props) => {
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

  return (
    <div>
      <h1>Invoices</h1>
      <Button onClick={openModal} variant="primary">
        New Invoice
      </Button>
      <InvoiceModal isOpen={modalIsOpen} closeModal={closeModal}>
        <InvoiceForm onSubmit={onSubmit} onDiscard={closeModal} />
      </InvoiceModal>
    </div>
  );
};

export default Dashboard;
