import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "../Form/form";
import "./modal.scss";

const InputModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTimeout(() => {
      handleShow();
    }, 2000);
  }, []);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header className="modal-header">
        <Modal.Title>Sponsorship</Modal.Title>
        <Modal.Title>(Your Information is safe with us)</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form closeModal={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default InputModal;
