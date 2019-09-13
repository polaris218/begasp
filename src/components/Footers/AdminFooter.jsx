/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Calendar extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <footer className="footer pt-0">
            <Row className="align-items-center justify-content-lg-between">
              <Col lg="6">
                <div className="copyright text-center text-lg-left text-muted">
                  © {new Date().getFullYear()}{" "}
                  <a
                    className="font-weight-bold ml-1"
                    href="https://begasp.com"
                    target="_blank"
                  >
                    BeGasp
                  </a>
                </div>
              </Col>
              <Col lg="6">
                <Nav className="nav-footer justify-content-center justify-content-lg-end">
                  <NavItem>
                    <NavLink
                      href="https://begasp.com"
                      target="_blank"
                    >
                      BeGasp
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://begasp.com"
                      target="_blank"
                    >
                      Company
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://medium.com/@BeGaspInc"
                      target="_blank"
                    >
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://begasp.com"
                      target="_blank"
                    >
                      Terms of Service
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </footer>
        </Container>
      </>
    );
  }
}

export default Calendar;
