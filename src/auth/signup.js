import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap"
export default function Signup() {

    
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col style={{ fontSize: "1.5rem", textAlign: "center" }} sm={8}>direct message explaining the strategy and method of investing in blocks/pools</Col>
                </Row>
                <br></br>
                <Row className="justify-content-center">
                    <Col style={{ fontSize: "2.5rem", textAlign: "center" }} sm={8}>Sign in to Create your Pool</Col>
                </Row>
                
                <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
            </Container>
        </>
    )
}