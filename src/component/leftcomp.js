import { Container, Row, Col, Navbar } from "react-bootstrap"

export default function LeftComp(){
    return(
        <>
            <Container style={{marginLeft:"0",width:"20rem",backgroundColor:"orange"}}>
                <Row >
                    <Col>
                        <h3>my journey</h3>
                    </Col>
                </Row>
            </Container>
        </>
    )
}