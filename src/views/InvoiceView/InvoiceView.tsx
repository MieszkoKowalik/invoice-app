import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Invoice } from "types/Invoice";
import { useState } from "react";
import { StyledLink, Wrapper, ControllerWrapper } from "./InvoiceView.style";
import { ReactComponent as IconLeft } from "assets/images/icon-arrow-left.svg";
import StatusBar from "components/organisms/StatusBar/StatusBar";
import Loader from "components/molecules/Loader/Loader";
import InvoiceController from "components/molecules/InvoiceController/InvoiceControllers";
import { useTheme } from "styled-components";
import useMediaQuery from "hooks/useMediaQuery";
import InvoiceDetails from "components/organisms/InvoiceDetails/InvoiceDetails";

import { AppRoutes } from "types/AppRoutes";
import { Collections } from "types/Collections";

type InvoiceProps = {};

const InvoiceView = (props: InvoiceProps) => {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.m);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const docRef = doc(db, Collections.Invoices, id);
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
    <Wrapper>
      <StyledLink to={AppRoutes.Home}>
        <IconLeft />
        Go back
      </StyledLink>
      {invoice && (
        <>
          <StatusBar status={invoice.status} />

          <InvoiceDetails invoice={invoice} />
          {!isTablet && (
            <ControllerWrapper>
              <InvoiceController status={invoice.status} />
            </ControllerWrapper>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default InvoiceView;
