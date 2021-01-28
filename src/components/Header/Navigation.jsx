import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import logo from "../../assets/images/logo.svg";

const Navigation = () => (
    <Navbar expand="lg">
        {/* logo section start */}
        <Navbar.Brand href="#home">
            <div className="logo">
                <img src={logo} />
            </div>
        </Navbar.Brand>

        {/* navigation left section start */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Plan travel</Nav.Link>
                <Nav.Link href="#">Flying with us</Nav.Link>
                <Nav.Link href="#">Travel information</Nav.Link>
                <Nav.Link href="#">Discover</Nav.Link>
                <Nav.Link href="#">Journey</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

);

export default Navigation;