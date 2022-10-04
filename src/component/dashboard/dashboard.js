import { Container,Col,Row } from "react-bootstrap"
import RightComp from "../rightcomp"
import LeftComp from "../leftcomp"

export default function Dashboard(){
    return(
        <>
            <Container>
                <Row>
                    <Col md={3}>
                        <LeftComp/>
                    </Col>
                    <Col md={6} style={{backgroundColor:"red"}}>

                    </Col>
                    <Col md={3}>
                        <RightComp/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}