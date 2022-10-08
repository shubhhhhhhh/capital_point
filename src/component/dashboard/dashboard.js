import { Container, Col, Row } from "react-bootstrap"
import RightComp from "../rightcomp"
import LeftComp from "../leftcomp"

export default function Dashboard() {
    return (
        <>
            <Container fluid="true" style={{ padding: " 0rem 3rem" }}>
                <Row>
                    {/* <Col md={2} style={{backgroundColor:"#dfffef",padding:"0rem"}}><LeftComp /></Col>
                    <Col md={6} style={{padding:"0rem"}}>
                        <div style={{backgroundColor:"red",color:"white" }}>
                            <h1>hey</h1>
                        </div>
                    </Col>
                    <Col md={4} style={{padding:"0rem 0rem 0rem 5rem"}}><RightComp /></Col> */}
                    <LeftComp />
                    {/* <div style={{width:"5px"}}></div> */}
                    <div style={{ backgroundColor: "red", color: "white", display:"inline-block" , width:"45rem" }}>
                        <h1>hey</h1>
                    </div>
                    <RightComp />
                </Row>
            </Container>

        </>
    )
}