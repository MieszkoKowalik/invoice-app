import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Invoice } from "types";
import { useState } from "react";
import { StyledLink } from "./InvoiceView.style";
import { ReactComponent as IconLeft } from "assets/images/icon-arrow-left.svg";
import StatusBar from "components/organisms/StatusBar/StatusBar";
import Loader from "components/molecules/Loader/Loader";

type InvoiceProps = {};

const InvoiceView = (props: InvoiceProps) => {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [isLoading, setIsLoading] = useState(true);
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
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <StyledLink to="/">
        <IconLeft />
        Go back
      </StyledLink>
      {invoice && <StatusBar status={invoice.status} />}
    </div>
  );
};

export default InvoiceView;
