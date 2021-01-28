import React from "react";
import { Row, Container, CloseButton } from "react-bootstrap";

const Announcement = ({ message }) => (
    <Row className="alert alert-primary">
        <Container>{message} <CloseButton /></Container>
    </Row>
);

export default Announcement;