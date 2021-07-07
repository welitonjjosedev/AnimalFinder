import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Auth from "./Auth"

import { useHistory } from 'react-router-dom';

const Header = () => {
    let history = useHistory();
    const [authModal, setAuthModal] = useState(false);

    const isLogged = () => {
        return false
    }

    return(
       <>
            <Navbar fixed="top" className="bg-transparent shadow">
                <Navbar.Brand href="#home">Animal Finder</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link  className="text-dark text-uppercase" onClick={() => history.push('/lost')}>Perdi Meu Pet</Nav.Link>
                    { !localStorage.getItem('email') &&  <Auth />}
                </Navbar.Collapse>
            </Navbar>

            <Auth show={authModal}/>
       </>
    )
}

export default  Header;