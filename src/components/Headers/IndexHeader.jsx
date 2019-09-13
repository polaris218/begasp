import React from "react";
// react library for routing
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

class IndexHeader extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-info pt-5 pb-7">
          <Container>
            <div className="header-body">
              <Row className="align-items-center">
                <Col lg="6">
                  <div className="pr-5">
                    <h1 className="display-2 text-white font-weight-bold mb-0">
                      BeGasp Platform
                    </h1>
                    <h2 className="display-4 text-white font-weight-light">
                      The simplest way to connect advertisers and streamers
                    </h2>
                    <p className="text-white mt-4">
                      BeGasp is seeking streamers to participate in our beta test.
                      Where you can earn real money.
                    </p>
                    <div className="mt-5">
                      <Button
                        className="my-2"
                        color="default"
                        href="https://begasp.com/beta"
                      >
                        Join Beta
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <Row className="pt-5">
                    <Col md="6">
                      <Card>
                        <CardBody>
                          <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4">
                            <i className="ni ni-active-40" />
                          </div>
                          <h5 className="h3">Client Interoperability</h5>
                          <p>
                            Our software client works with all stream mixers.
                          </p>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardBody>
                          <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                            <i className="ni ni-active-40" />
                          </div>
                          <h5 className="h3">Cross-Provider</h5>
                          <p>
                            Works with Twitch, Google and Facebook livestreams.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="pt-lg-5 pt-4" md="6">
                      <Card className="mb-4">
                        <CardBody>
                          <div className="icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4">
                            <i className="ni ni-active-40" />
                          </div>
                          <h5 className="h3">Cross-Platform</h5>
                          <p>
                          Windows, OSX, and Linux
                          </p>
                        </CardBody>
                      </Card>
                      <Card className="mb-4">
                        <CardBody>
                          <div className="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                            <i className="ni ni-active-40" />
                          </div>
                          <h5 className="h3">Get Paid</h5>
                          <p>
                            Signup. Install. Click Go. Get Cash.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
      </>
    );
  }
}

export default IndexHeader;
