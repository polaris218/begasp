/*eslint-disable*/
import React from "react";
// react library for routing
import { Link } from "react-router-dom";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import IndexHeader from "components/Headers/IndexHeader.jsx";
import AuthFooter from "components/Footers/AuthFooter.jsx";

class Index extends React.Component {
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="main-content">
          <IndexHeader />
          <section className="py-6 pb-9 bg-default">
            <Container fluid>
              <Row className="justify-content-center text-center">
                <Col md="6">
                  <h2 className="display-3 text-white">
                    The live #Ad placement platform
                  </h2>
                  <p className="lead text-white">
                    BeGasp is a new approach to serving and categorizing
                    video feeds in real-time. Content creators get the
                    tools to establish on demand brand relationships. Advertisers
                    get the data to quantify the impact of advertisements.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-lg-0 mt--7">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape bg-gradient-info text-white rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h4 className="h3 text-info text-uppercase">
                            Direct Sponsorships [beta]
                          </h4>
                          <p className="description mt-3">
                            The streamer and advertiser both need to agree to
                            show a given advertisement.
                          </p>
                          <div>
                            <Badge color="info" pill>
                              invite ads
                            </Badge>
                            <Badge color="info" pill>
                              banners
                            </Badge>
                            <Badge color="info" pill>
                              sponsorships
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape bg-gradient-success text-white rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h4 className="h3 text-success text-uppercase">
                            Private advertisements
                          </h4>
                          <p className="description mt-3">
                            Use this for affiliate links or visual elements
                            that you've created. They mix in with all
                            other ad types.
                          </p>
                          <div>
                            <Badge color="success" pill>
                              private ads
                            </Badge>
                            <Badge color="success" pill>
                              affiliates
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape bg-gradient-warning text-white rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h4 className="h3 text-warning text-uppercase">
                            Other Ad Support
                          </h4>
                          <p className="description mt-3">
                            BeGasp has developed several distinct types of
                            advertisements which will be gradually rolled out
                            as we gather feedback.
                          </p>
                          <div>
                            <Badge color="warning" pill>
                              more ads
                            </Badge>
                            <Badge color="warning" pill>
                              global
                            </Badge>
                            <Badge color="warning" pill>
                              video
                            </Badge>
                            <Badge color="warning" pill>
                              prizes
                            </Badge>
                            <Badge color="warning" pill>
                              AI
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="py-6">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/landing-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h1>Brand Aware 1:1</h1>
                    <p>
                      It might not be appropriate for every person to run your ad.
                      We made an invite only option. You can bring your own influencer.
                      Or discover one on our platform. When both sides agree the fit is good
                      we help quantify with live Ad metrics.

                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              Live impression data
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">Joint approval</h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              Stripe Payments
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="py-6">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/landing-2.png")}
                  />
                </Col>
                <Col md="6">
                  <div className="pr-md-5">
                    <h1>Roadmap</h1>
                    <p>
                      Beta begins the live testing of our platform, but we've
                      got a lot more planned down the road.
                    </p>
                    <Link
                      className="font-weight-bold text-warning mt-5"
                      to="/admin/roadmap"
                    >
                      Roadmap
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="py-6">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/landing-3.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h1>PLACEHOLDER</h1>
                    <p>
                      DOING IT TODO
                    </p>
                    <Link
                      className="font-weight-bold text-info mt-5"
                      to="/admin/widgets"
                    >
                      Explore TODO
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="py-7 section-nucleo-icons bg-white overflow-hidden">
            <Container>
              <Row className="justify-content-center">
                <Col className="text-center" lg="8">
                  <h2 className="display-3">Nucleo Icons</h2>
                  <p className="lead">
                    The official package contains over 21.000 icons which are
                    looking great in combination with Argon Design System. Make
                    sure you check all of them and use those that you like the
                    most.
                  </p>
                  <div className="btn-wrapper">
                    <Button
                      color="info"
                      href="https://demos.creative-tim.com/argon-dashboard-pro-react/#/documentation/icons?ref=adpr-index-page"
                      target="_blank"
                    >
                      View demo icons
                    </Button>
                    <Button
                      className="mt-3 mt-md-0"
                      color="default"
                      href="https://nucleoapp.com/?ref=1712"
                      target="_blank"
                    >
                      View all icons
                    </Button>
                  </div>
                </Col>
              </Row>
              <div className="blur--hover">
                <a
                  href="https://demos.creative-tim.com/argon-dashboard-pro-react/#/documentation/icons?ref=adpr-index-page"
                  target="_blank"
                >
                  <div className="icons-container blur-item mt-5">
                    <i className="icon ni ni-diamond" />

                    <i className="icon icon-sm ni ni-album-2" />
                    <i className="icon icon-sm ni ni-app" />
                    <i className="icon icon-sm ni ni-atom" />

                    <i className="icon ni ni-bag-17" />
                    <i className="icon ni ni-bell-55" />
                    <i className="icon ni ni-credit-card" />

                    <i className="icon icon-sm ni ni-briefcase-24" />
                    <i className="icon icon-sm ni ni-building" />
                    <i className="icon icon-sm ni ni-button-play" />

                    <i className="icon ni ni-calendar-grid-58" />
                    <i className="icon ni ni-camera-compact" />
                    <i className="icon ni ni-chart-bar-32" />
                  </div>
                  <span className="blur-hidden h5 text-success">
                    Eplore all the 21.000+ Nucleo Icons
                  </span>
                </a>
              </div>
            </Container>
          </section>
          <section className="py-7">
            <Container>
              <Row className="row-grid justify-content-center">
                <Col className="text-center" lg="8">
                  <h2 className="display-3">
                    stack information here{" "}
                    <span className="text-success">
                      Dashboard for Bootstrap 4, React and Reactstrap?
                    </span>
                  </h2>
                  <p className="lead">
                  TODO STACK INFO
                    react, node, graph, auth0, prisma, aws dynamodb, electron,
                    bootstrap, serverless, aws lambda, aws s3, aws sqs,
                    solidity, truffle, ethereum
                  </p>
                  <div className="btn-wrapper">
                    <Button
                      className="btn-neutral mb-3 mb-sm-0"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-dashboard-react?ref=adpr-index-page"
                      target="_blank"
                    >
                      <span className="btn-inner--text">Get FREE version</span>
                    </Button>
                    <Button
                      className="btn-icon mb-3 mb-sm-0"
                      color="info"
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpr-index-page"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-basket" />
                      </span>
                      <span className="btn-inner--text">Purchase now</span>
                      <Badge
                        className="badge-md badge-floating border-white"
                        color="danger"
                        pill
                      >
                        $89
                      </Badge>
                    </Button>
                  </div>
                  <div className="text-center">
                    <h4 className="display-4 mb-5 mt-5">
                      built on these technologies
                    </h4>
                    <Row className="justify-content-center">
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=adpr-index-page"
                          id="tooltip170669606"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle shadow shadow-lg--hover"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip170669606"
                        >
                          Bootstrap 4 - Most popular front-end component library
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpr-index-page"
                          id="tooltip374813715"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip374813715"
                        >
                          React - A JavaScript library for building user
                          interfaces
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://www.creative-tim.com/product/argon-dashboard-pro-nodejs?ref=adpr-index-page"
                          id="tooltip374813715"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nodejs-logo.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip374813715"
                        >
                          React - A JavaScript library for building user
                          interfaces
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://www.creative-tim.com/product/argon-dashboard-pro-laravel?ref=adpr-index-page"
                          id="tooltip374813715"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/laravel_logo.png"
                            style={{ backgroundColor: "white" }}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip374813715"
                        >
                          React - A JavaScript library for building user
                          interfaces
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://vuejs.org/?ref=creative-tim"
                          id="tooltip616015001"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle opacity-3"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip616015001"
                        >
                          [Coming Soon] Vue.js - The progressive javascript
                          framework
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://www.sketchapp.com/?ref=creative-tim"
                          id="tooltip82987604"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle opacity-3"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/sketch.jpg"
                          />
                        </a>
                        <UncontrolledTooltip delay={0} target="tooltip82987604">
                          [Coming Soon] Sketch - Digital design toolkit
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://www.adobe.com/products/photoshop.html?ref=creative-tim"
                          id="tooltip731835410"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle opacity-3"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/ps.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731835410"
                        >
                          [Coming Soon] Adobe Photoshop - Software for digital
                          images manipulation
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://angularjs.org/?ref=creative-tim"
                          id="tooltip211254026"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle opacity-3"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip211254026"
                        >
                          [Coming Soon] Angular - One framework. Mobile &
                          desktop
                        </UncontrolledTooltip>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default Index;
