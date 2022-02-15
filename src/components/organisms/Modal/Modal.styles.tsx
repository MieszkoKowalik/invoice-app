import styled from "styled-components";
import ReactModal from "react-modal";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ModalWrapper = styled(ReactModal).attrs({
  overlayClassName: "ReactModal__Overlay",
})`
  &:focus {
    outline: none;
  }
`;
