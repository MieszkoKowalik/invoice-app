import { Wrapper } from "./InvoiceController.styles";
import { Button } from "components/atoms/Button/Button";
import { Status } from "types/Invoice";

type InvoiceControllerProps = {
  status: Status;
};

const InvoiceController = ({ status }: InvoiceControllerProps) => {
  return (
    <Wrapper>
      {status !== "paid" && <Button variant="secondary">Edit</Button>}
      <Button variant="danger">Delete</Button>
      {status === "pending" && <Button variant="primary">Mark as Paid</Button>}
    </Wrapper>
  );
};

export default InvoiceController;
