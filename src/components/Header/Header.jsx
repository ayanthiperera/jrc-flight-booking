import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./Navigation";
import UserSection from "./UserSection";

const Header = () => (
    <header className="header-main">
        <Container className="display-flex">
            <Navigation />
            <UserSection />
        </Container>
    </header>
);

export default Header;
