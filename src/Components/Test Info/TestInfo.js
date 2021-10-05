import React from 'react';
import { ButtonGroup, Button, Form, Container, Row, Col, Image } from 'react-bootstrap';
import './TestInfo.css'


const TestInfo = () => {
    return (
        <div>
            <h2>IELTS TEST INFORMATION</h2>

            <div>
                <h3 className="text-warning">Upcoming exam schedules</h3>
                <Container>
                    <Row>

                        <Col xs={6} md={4}>
                            <a href="https://www.britishcouncil.org.bd/en/exam/ielts/dates-fees-locations"> <Image src="http://ieltscafe.in/wp-content/uploads/2020/05/IELTS-Exam-Booking-300x168.png" thumbnail /></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <a href="https://calendar.google.com/calendar/u/0/r"><Image className="scnd-img" src="https://www.nicepng.com/png/detail/385-3856554_convenient-class-schedule-icones-de-agenda-png.png" thumbnail /></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <a href="https://www.smarttalk.in/which-countries-accept-ielts/"><Image className="third-img" src="https://lh3.googleusercontent.com/proxy/NLRTJU3I7AsLPltoZ3e0mUBDOlZ33k3LN1HPuncD8Au585svoGTpf8YDFPDReXZ7usVJ_96QzueWK92120zAddkvlD9cnj8CCvzXHFGVZ687Iwd-OwsJF15FqAdiE5aTAYeMep75QEaCLcYB85JxlkaVcg" thumbnail /></a>
                        </Col>

                    </Row>
                </Container>
            </div>


            <h2 className="border border-primary my-5 p-1 registration">Registration Now</h2>

            <div className="container border border-secondary p-1 rounded">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign in
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default TestInfo;