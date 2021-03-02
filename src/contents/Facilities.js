import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Access from "../img/247access.svg";
import Line from "../img/line.png";
import SpaciousCubicles from "../img/Spacious-Cubicles.svg";
import PowerBackup from "../img/Power-Backup.svg";
import PrinterFacilities from "../img/Printer-Facilities.svg";
import CCTVAccessCards from "../img/CCTV-&-Access-Cards.svg";
import FridgeMicrowave from "../img/Fridge-Microwave.svg";
import TVSetTopBox from "../img/TV-Set-Top- Box.svg";
import ReceptionArea from "../img/Reception-Area.svg";
import LargeCafeteria from "../img/Large-Cafeteria.svg";
import TVConferenceRooms from "../img/TV-Conference-Rooms.svg";
import PostalAddress from "../img/Postal-Address.svg";
import LargeOpenTerrace from "../img/Large-Open-Terrace.svg";
import VariousMeetingRooms from "../img/Various-Meeting-Rooms.svg";
import HousekeepingFacilities from "../img/Housekeeping-Facilities.svg";
import ParkingSpaces from "../img/Parking-Spaces.svg";


class Facilities extends Component {
    render() {
        return (

            <section id="facilities">
                <h2>Facilities</h2>
                <img id="line" alt="...." src={Line}></img>
                <p id="sub-head">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...</p>
                <Container>
                    <Row id="row">
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={Access}></img>
                            <p class="mb-0">24/7 Access</p>
                        </Col>
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={SpaciousCubicles}></img>
                            <p class="mb-0">Spacious Cubicles</p>
                        </Col>
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={PowerBackup}></img>
                            <p class="mb-0">24/7 Power Backup</p>
                        </Col>
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={PrinterFacilities}></img>
                            <p class="mb-0">Printer Facilities</p>
                        </Col>
                    </Row>

                    <Row id="row">
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={CCTVAccessCards}></img>
                            <p class="mb-0">CCTV & Access Cards</p>
                        </Col>
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={FridgeMicrowave}></img>
                            <p class="mb-0">Fridge & Microwave</p>
                        </Col>
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={TVSetTopBox}></img>
                            <p class="mb-0">TV & Set Top Box</p>
                        </Col>
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={ReceptionArea}></img>
                            <p class="mb-0">Reception Area</p>
                        </Col>
                    </Row>

                    <Row id="row">
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={LargeCafeteria}></img>
                            <p class="mb-0">24/7 Access</p>
                        </Col>
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={TVConferenceRooms}></img>
                            <p class="mb-0">TV Conference Rooms</p>
                        </Col>
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={PostalAddress}></img>
                            <p class="mb-0">Postal Address</p>
                        </Col>
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={LargeOpenTerrace}></img>
                            <p class="mb-0">Large Open Terrace</p>
                        </Col>
                    </Row>

                    <Row id="row">
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={VariousMeetingRooms}></img>
                            <p class="mb-0">Various Meeting Rooms</p>
                        </Col>
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={HousekeepingFacilities}></img>
                            <p class="mb-0">Housekeeping Facilities</p>
                        </Col>
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                            <img alt="...." src={ParkingSpaces}></img>
                            <p class="mb-0">Parking Spaces</p>
                        </Col>
                        <Col className="d-flex align-itens-center justufy-content-center align-items-center">
                        </Col>
                    </Row>

                </Container>
            </section>
        )
    }
}

export default Facilities
