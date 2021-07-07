import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MaskedFormControl from 'react-bootstrap-maskedinput'

const Finder = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" className="btn-block" onClick={handleShow}>
        QUEM ME VIU?
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Quem Viu Amora?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Nome:
            </Form.Label>
            <Col sm="10">
              <Form.Control defaultValue="Nome Completo" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Telefone
            </Form.Label>
            <Col sm="10">
            <MaskedFormControl type='text' name='phoneNumber' mask='(11) 1.1111-1111' />
            </Col>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={handleClose}>
            cancelar
          </Button>
          <Button variant="dark" onClick={handleClose}>
            SALVAR
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Finder;