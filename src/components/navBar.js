import React from 'react';
import { Nav, Navbar, Container} from "react-bootstrap";
import IconFunction from "./CartWidget";
import { LinkContainer } from 'react-router-bootstrap';
import cart from './images/cart.png'

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <IconFunction /> 
                    <Navbar.Brand href="#home">OnlineMovies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link  href="#home">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/">
                            <Nav.Link href="#link">Todas</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Estrenos/id=1">
                            <Nav.Link href="#link">Estrenos</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/FAQ">
                            <Nav.Link href="#link">Preguntas</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Cart">
                            {/* <Nav.Link href="#link">Carro <IconFunction />  </Nav.Link> */}
                                <Navbar.Brand href="#home">
                                    <img
                                    alt=""
                                    src={cart}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    />{' '}
                                Carro
                                </Navbar.Brand>
                        </LinkContainer>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
}

export default NavBar;