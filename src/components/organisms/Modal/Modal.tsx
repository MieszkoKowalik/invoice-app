import React, { ReactNode } from "react";
import { ModalWrapper, Overlay } from "./Modal.styles";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  closeModal: () => void;
};

const Modal = React.forwardRef<ReactModal, ModalProps>(
  ({ isOpen, closeModal, className, children }: ModalProps, ref) => {
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
