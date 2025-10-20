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
    <Navbar expand="lg" className="bg-light p-0 border-bottom">
      <Container className=" d-flex justify-content-center">
        <Row className="m-0">
          <Col md={4} className="d-flex align-items-center">
            <Navbar.Brand href="#">
              <i className="bi bi-linkedin fs-2 text-primary"></i>
            </Navbar.Brand>
            <Form className="position-relative me-5">
              <i className="bi bi-search position-absolute top-50 start-0 translate-middle ms-4"></i>
              <Form.Control
                type="search"
                placeholder="Cerca"
                className="me-2 ps-5 rounded-5 border-secondary"
                aria-label="Search"
              />
            </Form>
          </Col>

          <Col
            md={6}
            className="d-flex  justify-content-end align-items-center"
          >
            <Nav className="d-flex align-items-end gap-4">
              <Link className="d-flex flex-column align-items-center mx-1">
                <i className="bi bi-house-fill fs-5"></i>
                <p className="m-0">Home</p>
              </Link>
              <Link className="d-flex flex-column align-items-center mx-1">
                <i className="bi bi-people-fill fs-5"></i>
                <p className="m-0">Rete</p>
              </Link>
              <Link className="d-flex flex-column align-items-center mx-1">
                <i className="bi bi-briefcase-fill fs-5"></i>
                <p className="m-0">Lavoro</p>
              </Link>
              <Link className="d-flex flex-column align-items-center mx-1">
                <i className="bi bi-chat-dots-fill fs-5"></i>
                <p className="m-0">Messaggistica</p>
              </Link>
              <Link className="d-flex flex-column align-items-center mx-1">
                <i className="bi bi-bell-fill fs-5"></i>
                <p className="m-0">Notifiche</p>
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
                <NavDropdown title="Tu" id="navbarScrollingDropdown">
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
            </Nav>
          </Col>
          {/* dropdown aziende */}
          <Col
            md={2}
            className="d-flex align-items-center justify-content-end border-start"
          >
            <div className="d-flex flex-column align-items-center  me-3">
              <div
                style={{
                  color: "#666666",
                }}
              >
                <i className="bi bi-grid-3x3-gap-fill fs-5"></i>
              </div>
              <NavDropdown title="Per le aziende" id="navbarScrollingDropdown">
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
            <a
              className="text-center"
              href="/"
              onClick={(e) => e.preventDefault()}
              style={{
                color: "#9e6427ff",
                textDecoration: "underline",
                fontSize: 12,
              }}
            >
              Prova Premium per 0 EUR
            </a>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default NavBarLinkIn;
