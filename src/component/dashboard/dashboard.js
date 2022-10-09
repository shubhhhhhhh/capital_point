import { Container, Col, Row } from "react-bootstrap"
import RightComp from "../rightcomp"
import LeftComp from "../leftcomp"

export default function Dashboard() {
    return (
        <>
            <Container fluid="true" style={{ padding: " 0.5rem 3rem" }}>
                <Row>
                    <LeftComp />
                    <div style={{ backgroundColor: "red", color: "white", display:"inline-block" , width:"46.3rem",margin:"0rem 0.5rem 0rem 0.5rem" }}>
                        <div>
                            <h1>changeables</h1>
                        </div>
                    </div>
                    <RightComp />
                </Row>
            </Container>
        </>
    )
}