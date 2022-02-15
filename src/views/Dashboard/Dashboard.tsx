import { useState } from "react";
import { Button } from "components/atoms/Button/Button";
import InvoiceForm from "components/organisms/InvoiceForm/InvoiceForm";
import { InvoiceModal } from "./Dashboard.styles";

interface Props {}
const Dashboard = (props: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <h1>Invoices</h1>
      <Button onClick={() => setModalIsOpen(true)} variant="primary">
        New Invoice
      </Button>
      <InvoiceModal isOpen={modalIsOpen} closeModal={closeModal}>
        <InvoiceForm closeModal={closeModal} />
      </InvoiceModal>
    </div>
  );
};

export default Dashboard;
