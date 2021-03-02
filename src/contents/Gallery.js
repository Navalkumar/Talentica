import React, { Component } from 'react'
import Line from "../img/line.png";
import Gimage1 from "../img/Gimage1.png"
import Gimage2 from "../img/Gimage2.png"
import Gimage3 from "../img/Gimage3.png"
import Gimage4 from "../img/Gimage4.png"
import Gimage5 from "../img/Gimage5.png"
import Gimage6 from "../img/Gimage6.png"

import { Row, Col } from "react-bootstrap";

class Gallery extends Component {

    render() {
        return (
            <>
                <section id="gallery">
                    <h2>Gallery</h2>
                    <img id="line" alt="...." src={Line}></img>
                    <p id="sub-head">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...</p>
                    <Row>
                        <Col className="p-0">
                            <img id="gimage"  alt="...."  src={Gimage6}></img>
                            <p id="onHover">Working Area</p>
                        </Col>
                        <Col className="p-0">
                            <img id="gimage"  alt="...."  src={Gimage1}></img>
                            <p id="onHover">Working Area</p>
                        </Col>
                        <Col className="p-0">
                            <img id="gimage"  alt="...."  src={Gimage2}></img>
                            <p id="onHover">Working Area</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-0">
                            <img id="gimage"  alt="...."  src={Gimage5}></img>
                            <p id="onHover">Working Area</p>
                        </Col>
                        <Col className="p-0">
                            <img id="gimage"  alt="...."  src={Gimage4}></img>
                            <p id="onHover">Working Area</p>
                        </Col>
                        <Col className="p-0">
                            <img id="gimage"  alt="...."  src={Gimage3}></img>
                            <p id="onHover">Working Area</p>
                        </Col>
                    </Row>
                </section>
            </>
        )
    }
}

export default Gallery
