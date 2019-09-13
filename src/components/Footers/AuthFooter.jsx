/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <footer className="py-5" id="footer-main">
          <Container>
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="6">
                <div className="copyright text-center text-xl-left text-muted">
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
              <Col xl="6">
                <Nav className="nav-footer justify-content-center justify-content-xl-end">
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
          </Container>
        </footer>
      </>
    );
  }
}

export default Login;
