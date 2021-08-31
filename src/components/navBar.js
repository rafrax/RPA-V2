import React from 'react';
import { Nav, Navbar, Container, NavDropdown} from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import CartWidget from "./CartWidget";
import { LinkContainer } from 'react-router-bootstrap';
import cart from './images/cart.png'
import { Basket2 } from 'react-bootstrap-icons';


export const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <span>
                        <Basket2 color="royalblue" 
                        size="30"
                        />
                    </span>
                    <Navbar.Brand href="#home">OnlineMovies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link  href="#todas">Todas</Nav.Link>
                        </LinkContainer>
                            <NavDropdown title="Tipo" id="nav-dropdown">
                                <NavDropdown.Item >
                                    <NavLink to="/Acción">Acción</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink to="/Thriller">Thriller</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to="/Comedia">Comedia</NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>                  
                        <LinkContainer to="/Preguntas">
                            <Nav.Link href="Preguntas" >Preguntas</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Cart">
                            {/* <Nav.Link href="#link">Carro <IconFunction />  </Nav.Link> */}
                            <Navbar.Brand href="Cart">
                            <CartWidget />  <img
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
