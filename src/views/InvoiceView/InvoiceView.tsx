import { Invoice } from "types";
import { useState } from "react";

type InvoiceProps = {};

const InvoiceView = (props: InvoiceProps) => {
  const [invoice, setInvoice] = useState<Invoice | null>(null);

  return <div>Invoice view</div>;
};

export default InvoiceView;
