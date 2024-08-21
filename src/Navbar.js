import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Navbar.css"

const Navbar = () => {
  return (
    <Container fluid>
      <Row className="py-3">
        <div className="logo-parent">
          <div className="logo">
            <img
              className="connecting-careers-final-logo-"
              alt=""
              src="/connecting-careers-final-logo02-1@2x.png"
            />
          </div>
          <img
            className="iconfeather-icon"
            alt=""
            src="/iconfeather-icon.svg"
          />
        </div>
      </Row>
    </Container>
  );
};

export default Navbar;
