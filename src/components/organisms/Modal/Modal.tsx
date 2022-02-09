import React, { ReactNode } from "react";
import { ModalWrapper, Overlay } from "./Modal.styles";
interface Props {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  closeModal: () => void;
}

const Modal = React.forwardRef<ReactModal, Props>(
  ({ isOpen, closeModal, className, children }: Props, ref) => {
    return (
      <ModalWrapper
        className={className}
        overlayElement={(props, contentElement) => (
          <Overlay {...props}>{contentElement}</Overlay>
        )}
        appElement={document.getElementById("root")!}
        isOpen={isOpen}
        onRequestClose={closeModal}
      >
        {children}
      </ModalWrapper>
    );
  }
);

export default Modal;
