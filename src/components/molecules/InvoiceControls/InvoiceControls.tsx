import { Wrapper } from "./InvoiceControls.styles";
import { Button } from "components/atoms/Button/Button";
import { Status } from "types";

type InvoiceControlsProps = {
  status: Status;
};

const InvoiceControls = ({ status }: InvoiceControlsProps) => {
  return (
    <Wrapper>
      {status !== "paid" && <Button variant="secondary">Edit</Button>}
      <Button variant="danger">Delete</Button>
      {status === "pending" && <Button variant="primary">Mark as Paid</Button>}
    </Wrapper>
  );
};

export default InvoiceControls;
