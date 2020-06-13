import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

export default class MyNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Playground</NavbarBrand>

          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/pagination">Pagination</Link>
              </NavItem>
              &nbsp;&nbsp;
              <NavItem>
                <Link to="/redux">Redux</Link>
              </NavItem>
              &nbsp;&nbsp;
              <NavItem>
                <Link to="/reduxform">Redux Form</Link>
              </NavItem>
              &nbsp;&nbsp;
            </Nav>
            <NavbarText>by Ikhalas</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
