import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Facebbok from "../img/Facebook.svg";
import LinkedIn from "../img/LinkedIn.svg";
import Twitter from "../img/Twitter.svg";
import TalenticaLogo from "../img/TalenticaLogo.svg";

class Footer extends Component {

    render() {
        return (
            <section id="footer">
                    <Row id="row">
                        <Col md={3}>
                            <p id="follow">follow us on</p>
                            <div id="social" className="d-flex">
                                <img id="socialIcons" src={LinkedIn}></img>
                                <img id="socialIcons" src={Facebbok}></img>
                                <img id="socialIcons" src={Twitter}></img>
                            </div>
                        </Col>
                        <Col md={3}>
                        <p id="terms">Terms & Conditions <br></br>
                        Privacy Policy</p> 
                        </Col>
                        <Col className="text-right" md={6}>
                        <p id="powered">powered by</p> 
                        <img src={TalenticaLogo}></img>
                        </Col>
                    </Row>
            </section>
        )
    }
}

export default Footer
