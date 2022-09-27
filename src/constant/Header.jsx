import { Col, Container, Row, Navbar } from "react-bootstrap";
import logo from "../media/header_logo.svg"
import './header.css'

export default function Header() {
    return (
        <>
            <Container fluid style={{ padding: " 0rem 1.8rem " }}>
                <Container fluid style={{ backgroundColor: "#f6f6f6", padding: "0.8rem 1.5rem" }}>
                    <Row md={12} xs={12}>
                        <Col md={3}>
                            <div  style={{ height:"4.5rem", width:"30vw" }}>
                                <div style={{display: "inline-block",padding:"0.1rem 0rem 0rem 0.6rem" }}>
                                    <img src={logo} alt="" height={"70rem"} />
                                </div>
                                <div style={{display:"inline-block"}}>
                                <div style={{width:"20vw", display: "inline-block",position:"absolute",margin:"-1.7rem 0rem 0rem 1rem" }}>
                                    <span style={{ fontSize: "1.9rem", fontWeight: "bold",display:"block" }}>PointCapitalis</span>
                                    <span style={{ fontSize: "1rem" ,display:"block"}}>Wealth Builders Point</span>
                                </div>    
                                </div>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}