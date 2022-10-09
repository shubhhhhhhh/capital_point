import { Container, Row, Col } from 'react-bootstrap'
import './css/rightComp.css'
export default function RightComp() {
    return (
        <>
            <div style={{ padding: "0", backgroundColor: "white", display: "inline-block", width: "23rem" }}>
                <div style={{ width: "100%", height: "42vh", backgroundColor: "#290fec", padding: "2.5rem 4rem" }}>
                    <div style={{ display: "inline-block", width: "33%" }}>
                        <div style={{ height: "5rem", backgroundColor: "#fbbc05", color: "white", padding: "1rem 1rem" }}><span >how it works</span></div>
                        <div style={{ height: "5rem", backgroundColor: "#a6008c", color: "white", padding: "1rem 0.1rem", fontSize: '0.8rem' }}><span >Invest in PointCapitalis</span></div>
                        <div style={{ height: "5rem", backgroundColor: "#03989e", color: "white", padding: "0rem 0.5rem" }}><span>Security of your capital</span></div>
                    </div>
                    <div style={{ display: "inline-block", width: "33%" }}>
                        <div style={{ height: "5rem", backgroundColor: "#38b6ff", color: "white", padding: "1rem 0.4rem" }}><span >why pool investing</span></div>
                        <div style={{ height: "5rem", backgroundColor: "#8c52ff", color: "white", padding: "1rem 0.4rem" }}><span>ABC</span></div>
                        <div style={{ height: "5rem", backgroundColor: "#6f6f6f", color: "white", fontSize: '0.7rem', padding: "1.3rem 0.3rem" }}><span>Benefit from Crypto transactions</span></div>
                    </div>
                    <div style={{ display: "inline-block", width: "33%" }}>
                        <div style={{ height: "5rem", backgroundColor: "#c9e265", color: "white", padding: "1rem 0.4rem" }}><span >company roadmap</span></div>
                        <div style={{ height: "5rem", backgroundColor: "red", color: "white", padding: "1rem 0.6rem" }}><span ></span></div>
                        <div style={{ height: "5rem", backgroundColor: "#9dfdcd", color: "white", padding: "0rem 0.6rem" }}><span>Wealth Builders Stories</span></div>
                    </div>
                </div>
                <div style={{ height: "42vh", backgroundColor: "#f3f3f3" }}>
                    <div>
                        <h6 style={{ color: "blue", fontSize: "1.1rem", display: "inline-block" }}>Read Jane's Wealth Building Journey</h6>
                        <span>+</span>
                        <div>
                            <span style={{ fontSize: "1rem", fontWeight: "bold", color: "grey" }}>Pool auto reallocation</span>
                            <span>@</span>
                        </div>
                        <div>Reallocated from blue to red</div>
                    </div>
                    <div>
                        <div>
                            <span style={{ fontSize: "1rem", fontWeight: "bold", color: "grey" }}>Pool auto reallocation</span>
                            <span>@</span>
                        </div>
                        <div>Reallocated from blue to red</div>
                    </div>
                    <div>
                        <div>
                            <span style={{ fontSize: "1rem", fontWeight: "bold", color: "grey" }}>Pool auto reallocation</span>
                            <span>@</span>
                        </div>
                        <div>Reallocated from blue to red</div>
                    </div>
                    <div>
                    <div>
                            <span style={{fontSize:"1rem",fontWeight:"bold",color:"grey"}}>Pool auto reallocation</span>
                            <span>@</span>
                        </div>
                        <div>Reallocated from blue to red</div>
                    </div>
                </div>
            </div>
        </>
    )
}