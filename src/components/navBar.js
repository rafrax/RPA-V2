import React from "react";
import { Nav, Navbar, NavDropdown, Container} from "react-bootstrap";
import IconFunction from "./CartWidget";

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <IconFunction /> 
                    <Navbar.Brand href="#home">RPA-APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Item1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Item2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Item3</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Item4</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
}

