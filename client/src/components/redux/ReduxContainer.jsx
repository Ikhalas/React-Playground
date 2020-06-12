import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ScrollBar from "react-perfect-scrollbar";
import Users from "./Users";
import Products from "./Products";

import "react-perfect-scrollbar/dist/css/styles.css";
import "../../assets/css/reduxcontainer.css"; // override the styles to display ScrollBar always.

export default class ReduxContainer extends Component {
  render() {
    return (
      <Container style={{ textAlign: "center" }}>
        <Row>
          <Col md="6">
            <ScrollBar>
              <div style={{ height: "90vh" }}>
                <Users />
              </div>
            </ScrollBar>
          </Col>
          <Col md="6">
            <ScrollBar>
              <div style={{ height: "90vh" }}>
                <Products />
              </div>
            </ScrollBar>
          </Col>
        </Row>
      </Container>
    );
  }
}
