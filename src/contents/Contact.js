import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Line from "../img/line.png";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mobile: '',
            company: '',
            email: '',
            message: '',
            error: '',
            thankyou: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    isValidEmail(email) {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    }

    isValidMobile(mobileno) {
        return /^[6-9]\d{9}$/.test(mobileno);
    }

    validateField(field, value) {
        if (value.length <= 0) {
            return <div className="alert alert-danger m-0 p-1"><span className="text-capitalize">{field}</span> is required field.</div>;
        } else {
            if (field == 'email') {
                if (!this.isValidEmail(value))
                    return <div className="alert alert-danger m-0">Invalid Email.</div>;
            } else if (field == 'mobile') {
                if (!this.isValidMobile(value))
                    return <div className="alert alert-danger m-0">Invalid Mobile Number.</div>;
            } else {
                return '';
            }
        }
    }

    handleBlur(event) {
        this.setState({ error: this.validateField(event.target.name, event.target.value) });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {

        this.setState({
            thankyou: true
        });

        event.preventDefault();

    }

    render() {
        return (
            <>
                <section id="contact">
                    <Container>
                        <Row>
                            <Col md={6} lg={6} sm={12}>
                                <h2>Say Hello</h2>
                                <img id="line" className="mb-5" src={Line}></img>
                                <p className="mb-0" id="name">BOOTSTRAPALLEY</p>
                                <p className="mb-4" id="address">B-7/8, Anmol Pride, Baner <br></br> Pune 411045</p>
                                <p className="mb-4" id="number">+91 20 4075 1111 <br></br>
                         +91 20 4075 1177</p>
                                <p id="email">bootstrap-alley@talentica.com</p>
                            </Col>
                            <Col md={6} lg={6} sm={12} id="writetous">
                                <h2>Write to us</h2>
                                <img id="line" className="mb-4" src={Line}></img>
                                <h3>{this.state.error}</h3>


                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Control name="name" type="text" placeholder="Name*" value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} required="required"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control name="email" type="email" placeholder="Email*" value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur} required="required"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control name="mobile" type="text" placeholder="Contact No." onBlur={this.handleBlur} value={this.state.mobile} onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control name="message" type="text" placeholder="Message" value={this.state.message} onChange={this.handleChange} onBlur={this.handleBlur} required="required"/>
                                    </Form.Group>
                                    <button type="submit" class="mt-2" id="send">Send</button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <iframe className="mt-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.503347825303!2d73.7891263153797!3d18.551332573073445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bedee7ae05ad%3A0x8c91a6c80076c0a!2sTalentica%20Software!5e0!3m2!1sen!2sin!4v1614677093460!5m2!1sen!2sin" width="100%" height="333" allowfullscreen="" loading="lazy"></iframe>

            </>
        )
    }
}

export default Contact
