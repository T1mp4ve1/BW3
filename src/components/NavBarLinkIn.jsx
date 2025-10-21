import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router";
import "./css/NavBarLinkIn.css";
import imagePlaceHolder from "../assets/logo.png";

const NavBarLinkIn = () => {
  return (
    <Navbar expand="lg" className="bg-light py-1 border-bottom">
      <Container className="d-flex justify-content-center align-content-center navBarContainer m-xs-0 m-lg-auto">
        <Row className="m-0 w-90">
          <Col
            xs={2}
            lg={4}
            className="d-flex justify-content-center align-content-center"
          >
            <div className="d-flex align-items-center">
              <Navbar.Brand href="#">
                <i className="bi bi-linkedin fs-2 text-primary"></i>
              </Navbar.Brand>
              <Link className="d-lg-none text-center">
                <i className="bi bi-search fs-5"></i>
                <p className="m-0 d-none d-lg-block">Cerca</p>
              </Link>
              <Form className="position-relative me-5 d-none d-lg-block">
                <i className="bi bi-search position-absolute top-50 start-0 translate-middle ms-4"></i>
                <Form.Control
                  type="search"
                  placeholder="Cerca"
                  className="me-2 ps-5 py-1 pe-5 rounded-5 border-secondary"
                  aria-label="Search"
                />
              </Form>
            </div>
          </Col>

          <Col
            xs={8}
            lg={6}
            className="d-flex  justify-content-end align-items-center"
          >
            <Nav className="d-flex flex-row align-items-center gap-1 gap-md-3 gap-lg-4">
              <Link
                to={"/"}
                className="d-flex flex-column align-items-center mx-1"
              >
                <i className="bi bi-house-fill fs-5"></i>
                <p className="m-0 d-none d-lg-block">Home</p>
              </Link>
              <Link className="d-flex flex-column align-items-center mx-1">
                <i className="bi bi-people-fill fs-5"></i>
                <p className="m-0 d-none d-lg-block">Rete</p>
              </Link>
              <Link className="d-flex flex-column align-items-center mx-1">
                <i className="bi bi-briefcase-fill fs-5"></i>
                <p className="m-0 d-none d-lg-block">Lavoro</p>
              </Link>
              <Link className="d-flex flex-column align-items-center mx-1">
                <i className="bi bi-chat-dots-fill fs-5"></i>
                <p className="m-0 d-none d-lg-block">Messaggistica</p>
              </Link>
              <Link className="d-flex flex-column align-items-center mx-1">
                <i className="bi bi-bell-fill fs-5"></i>
                <p className="m-0 d-none d-lg-block">Notifiche</p>
              </Link>
              {/* dropdown Tu */}
              <div className="d-flex flex-column align-items-center mx-1">
                <div>
                  <img
                    className="rounded-5"
                    src={imagePlaceHolder}
                    alt="profileImage"
                  />
                </div>
                <NavDropdown
                  title={<span className="d-none d-lg-inline">Tu</span>}
                  id="navbarScrollingDropdown"
                >
                  <div
                    className="p-2 dropDownMenu"
                    href="#action1"
                    style={{
                      width: "300px",
                    }}
                  >
                    <div className="d-flex">
                      <img
                        className="rounded-5 me-2"
                        src={imagePlaceHolder}
                        alt="profileImage"
                        style={{
                          width: "55px",
                          height: "55px",
                        }}
                      />
                      <div>
                        <h6 className="m-0">Pavel Timofeev</h6>
                        <p
                          style={{
                            fontSize: 14,
                          }}
                        >
                          Studente presso EPICODE Institute of Technology
                        </p>
                      </div>
                    </div>
                    <div className="border-bottom pb-2">
                      <Link
                        to={"/profile"}
                        className="d-flex justify-content-center"
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <Button
                          variant="outline-primary"
                          className="rounded-5 w-50 mt-1"
                        >
                          Visualiza profilo
                        </Button>
                      </Link>
                    </div>
                    <div className="my-2 d-flex flex-column border-bottom pb-2">
                      <h6>Account</h6>
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="mb-2"
                      >
                        Impostazioni e privacy
                      </a>
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="mb-2"
                      >
                        Guida
                      </a>
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="mb-2"
                      >
                        Lingua
                      </a>
                    </div>
                    <div className="my-2 d-flex flex-column border-bottom pb-2">
                      <h6>Gestisci</h6>
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="mb-2"
                      >
                        Post e attività
                      </a>
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="mb-2"
                      >
                        Account per la pubblicazione
                      </a>
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="mb-2"
                      >
                        Lingua
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="/" onClick={(e) => e.preventDefault()}>
                        Esci
                      </a>
                    </div>
                  </div>
                </NavDropdown>
              </div>
            </Nav>
          </Col>
          {/* dropdown aziende */}
          <Col
            xs={2}
            className="d-flex align-items-center justify-content-start border-start"
          >
            <div className="d-flex flex-column align-items-center me-3">
              <div
                style={{
                  color: "#666666",
                }}
              >
                <i className="bi bi-grid-3x3-gap-fill fs-5"></i>
              </div>
              <NavDropdown
                title={
                  <span className="d-none d-lg-inline">Per le aziende</span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            {/* <a
              className="text-center"
              href="/"
              onClick={(e) => e.preventDefault()}
              style={{
                color: "#9e6427ff",
                textDecoration: "underline",
                fontSize: 12,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Prova Premium per 0 EUR
            </a> */}
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default NavBarLinkIn;
