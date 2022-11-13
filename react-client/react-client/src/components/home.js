import React, { Component } from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar className="mt-3" variant="light">
            <Container>
              <Navbar.Brand>
                <strong>ABSENT APP</strong>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav.Link as={Link} to="/login">
                  <strong>Login</strong>
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  <strong>Register</strong>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br></br>
          <br></br>
          <div className="mt-4 text-center">
            <h1>Welcome to Absent App</h1>
            <Image
              className="mt-5 mb-4"
              src="assets/images/login.svg"
              width="500"
            />
            <h2>Please login first</h2>
            <p> Cheers hope your day is always Monday ! </p>
          </div>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <div class="footer text-center mt-15">
          <hr />
          <p class="copy">Copyright Erhit Adventure 2022</p>
        </div>
      </div>
    );
  }
}
