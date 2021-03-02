import React, { Component } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import LikeMindedStartups from "../img/Like-Minded-Startups.svg";
import LargeTerrace from "../img/Large-Terrace.svg";
import ReadyToMoveIn from "../img/Ready-to-Move-in.svg";
import FreeUnlimitedWiFi from "../img/Free-Unlimited-Wi-Fi.svg";
import LocatedOnMainRoad from "../img/Located-on-Main-Road.svg";
import HitTheTarget from "../img/Hit-the-Target.svg";

import Line from "../img/line.png";
class Benefits extends Component {
    render() {
        return (
            <section id="benefits">
                <h2>Benefits</h2>
                <img alt="...." src={Line} id="line"></img>
                <p class="mb-5" id="sub-head">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...</p>
                <Container>
                <Row className="mb-5" id="row">
                    <Col md={4} lg={4} sm={12}>
                    <img class="mb-3" alt="...." src={LikeMindedStartups} ></img> 
                    <h4>Like Minded Startups</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...
                    </p>
                    </Col>
                    <Col md={4} lg={4} sm={12}>
                    <img class="mb-3" alt="...." src={LargeTerrace} ></img> 
                    <h4>Large Terrace</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...
                    </p>
                    </Col>
                    <Col md={4} lg={4} sm={12}>
                    <img class="mb-3" alt="...." src={ReadyToMoveIn} ></img> 
                    <h4>Ready to Move in</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...
                    </p>
                    </Col>
                </Row>
                <Row id="row">
                <Col md={4} lg={4} sm={12}>
                    <img class="mb-3" alt="...." src={FreeUnlimitedWiFi} ></img> 
                    <h4>Free Unlimited Wi-Fi</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...
                    </p>
                    </Col>
                    <Col md={4} lg={4} sm={12}>
                    <img class="mb-3" alt="...." src={LocatedOnMainRoad} ></img> 
                    <h4>Located on Main Road</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...
                    </p>
                    </Col>
                    <Col md={4} lg={4} sm={12}>
                    <img class="mb-3" alt="...." src={HitTheTarget} ></img> 
                    <h4>Hit the Target</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...
                    </p>
                    </Col>
                </Row>

                </Container>
            </section>
        )
    }
}

export default Benefits
