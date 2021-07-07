import { useState, useRef  } from 'react';
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Form } from '@unform/web'
import Input from "./Input"
import * as Yup from 'yup';
import {registerAuth} from "../Service/auth"

const Auth = (props) => {
  const [key, setKey] = useState('access');
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleOpen = () => setShow(true)


  const Login = () => {
    const formRef = useRef(null);
    const handleSubmit = async (data) => {
      try {
        // Remove all previous errors
        formRef.current.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email()
            .required(),
          password: Yup.string()
            .min(6)
            .required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        // Validation passed
        console.log(data);
      } catch (err) {
        const validationErrors = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
      }
    }

    return(
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu Email" label="Email"/>
        <Input name="password" type="password" placeholder="Sua Senha" label="Senha"/>
       
        <Button variant="dark" type="submit" className="btn-block">
          Acessar
        </Button>
      </Form>
    )
  }



  const SignUp = () => {
    const formRef = useRef(null);
    const handleSubmit = async (data) => {
      try {
        // Remove all previous errors
        formRef.current.setErrors({});
        const schema = Yup.object().shape({
          // name: Yup.string().required(),
          // phone: Yup.string().required(),
          // city: Yup.string().required(),
          // state: Yup.string().required(),
          // email: Yup.string().email().required(),
          // password: Yup.string()
          //   .min(6)
          //   .required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        // Validation passed
        registerAuth(data)
      } catch (err) {
        const validationErrors = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
      }
    }

    return(
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu Nome" label="Nome"/>
        <Input name="email" type="email" placeholder="Seu Email" label="Email"/>
        <Input name="password" type="password" placeholder="Sua Senha" label="Senha"/>

        <Input name="phone" placeholder="Seu Telefone" label="Telefone"/>
        <Input name="city" placeholder="Sua Cidade" label="Cidade"/>
        <Input name="state" placeholder="Seu estado" label="Estado"/>
        
       
        <Button variant="dark" type="submit" className="btn-block">
          Acessar
        </Button>
      </Form>
    )
  }



  return (
    <>
      <Nav.Link  className="text-dark text-uppercase" onClick={handleOpen}>Acesso</Nav.Link>
      <Nav.Link  className="text-dark text-uppercase" onClick={handleOpen}>Sair</Nav.Link>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Indentifique-se</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Tabs
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="access" title="Acesso">
                <Login />
              </Tab>
              <Tab eventKey="signup" title="Cadastra-se">
                <SignUp />
              </Tab>
            </Tabs>
          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Auth;

