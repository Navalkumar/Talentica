import React, { Component } from 'react';
import { Navbar as Navigation, Nav } from "react-bootstrap";
import logo from "../img/logo.svg";
class Navbar extends Component {
    state = {
        bg: "transparent"
      };
    
      listenScrollEvent = e => {
        if (window.scrollY > 50) {
          this.setState({ bg: "dark" });
        } else {
          this.setState({ bg: "transparent" });
        }
      };
    
      componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
      }
    render() {
        return (
            <Navigation id="navbar" bg={this.state.bg} sticky="top" collapseOnSelect expand="lg">
                <Navigation.Brand href="#home">
                  <img src={logo} alt="ProfilePic" className="profilepic"></img>

                </Navigation.Brand>
                <Navigation.Toggle aria-controls="responsive-navbar-nav" />
                <Navigation.Collapse id="responsive-navbar-nav">
                    <Nav class="d-flex justify-content-end align-items-center h-100 w-100">
                        <div class="d-flex h-100 align-items-center" id="navbar-right">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#benefits">Benefits</Nav.Link>
                        <Nav.Link href="#facilities">Facilities</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                        </div>
                    </Nav>
                </Navigation.Collapse>
            </Navigation>
        )
    }
}

export default Navbar
