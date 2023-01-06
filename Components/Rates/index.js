import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Table from "./Table";

const Modal = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const StyledModalBody = styled.div`
    padding-top: 10px;
    text-align: center;
  `;

  const StyledModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
  `;

  const StyledModal = styled.div`
    background: white;
    width: 80vw;
    height: 80vh;
    border-radius: 15px;
    padding: 15px;

    @media only screen and (min-width: 400px) {
      background: white;
      width: 500px;
      height: 600px;
      border-radius: 15px;
      padding: 15px;
      z-index: 2;
    }
  `;
  const StyledModalOverlay = styled.div`
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
  `;

  const Cancel = styled.a`
    font-size: 15px;
    color: black;
  `;

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <Cancel href="#" onClick={handleCloseClick}>
            <Icon icon="akar-icons:cross" />
          </Cancel>
        </StyledModalHeader>

        <StyledModalBody>
          <Table />
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
