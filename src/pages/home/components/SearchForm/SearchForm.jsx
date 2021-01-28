import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class SearchForm extends React.Component {
    render() {
        return (
            <div className="form-content fade-in">
                <Container className="form-content-inner">
                    <form>
                        <Row>
                            <Col>
                                <h1>Reserve Your Flight & Boarding Today</h1>
                            </Col>
                        </Row>
                        <div className="reserve-option-row">
                            <label className="radio-btn-default" >
                                <p>Round Trip</p>
                                <Form.Control type="radio"
                                    name="deliveryTime"
                                    checked={true} />
                                <span className="checkmark" />
                            </label>
                            <label className="radio-btn-default" >
                                <p>One way</p>
                                <Form.Control type="radio"
                                    name="deliveryTime"
                                    checked={false} />
                                <span className="checkmark" />
                            </label>
                            <label className="radio-btn-default" >
                                <p>Multi-city</p>
                                <Form.Control type="radio"
                                    name="deliveryTime"
                                    checked={false} />
                                <span className="checkmark" />
                            </label>
                        </div>
                        <Row>
                            <Col md={3}>
                                <Form.Group controlId="">
                                    <Form.Label>Depart from</Form.Label>
                                    <Form.Control type="" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Arriving at</Form.Label>
                                    <Form.Control type="" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Depart date</Form.Label>
                                    <span className="calendar-input">
                                        <Form.Control type="" placeholder="" />
                                    </span>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Return date</Form.Label>
                                    <span className="calendar-input">
                                        <Form.Control type="" placeholder="" />
                                    </span>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>No of passengers</Form.Label>
                                    <Form.Control type="" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Promo code</Form.Label>
                                    <Form.Control type="" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Button className="btn btn-primary">Search Flight</Button>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </div>
        )
    }
}

export default SearchForm;