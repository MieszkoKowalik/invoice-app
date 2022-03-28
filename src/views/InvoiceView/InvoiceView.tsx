import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Invoice } from "types";
import { useState } from "react";
import { StyledLink } from "./InvoiceView.style";
import { ReactComponent as IconLeft } from "assets/images/icon-arrow-left.svg";

type InvoiceProps = {};

const InvoiceView = (props: InvoiceProps) => {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    (async () => {
      const docRef = doc(db, "invoices", id);
      try {
        const doc = await getDoc(docRef);
        if (doc.exists()) {
          setInvoice(doc.data() as Invoice);
        } else {
          console.log("There is no invoice with such id");
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [id]);
  return (
    <div>
      <StyledLink to="/">
        <IconLeft />
        Go back
      </StyledLink>
    </div>
  );
};

export default InvoiceView;
