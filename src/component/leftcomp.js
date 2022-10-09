import { Container, Row, Col, Navbar } from "react-bootstrap"
import proImg from '../media/proImg.png'
export default function LeftComp() {
  return (
    <>
      <div style={{ backgroundColor: "#dfffef", display: "inline-block", width: "14rem" }}>
        <div>
          <h5 style={{ display: "inline-block",marginLeft:"3.4rem",color:"#00c864" }}>shubham</h5>
          <span style={{marginLeft:"3.1rem"}}>+</span>
          <h6 style={{marginLeft:"3.8rem",color:"#f4c01e"}}>platinum</h6>
        </div>
        <div>
          <p style={{fontSize:"1rem",color:"blue",fontWeight:"bold"}}>My Journey</p>
          <img src={proImg} style={{width:"6rem",height:"8rem",marginLeft:"2rem"}}></img>
          <p style={{fontSize:"1rem"}}>My Floating Profit:{}</p>
          <p style={{fontSize:"1rem"}}>My Bookment Profit:{}</p>
          <p style={{fontSize:"1rem"}}>Commitment Rate {} </p>
          <p style={{fontSize:"1rem",color:"blue"}}>My people {}</p>
        </div>
      </div>

    </>
  )
}