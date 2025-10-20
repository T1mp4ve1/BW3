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

const NavBarLinkIn = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0">
      <Container>
        <Row>
          <Col md={4} className="d-flex align-items-center">
            <Navbar.Brand href="#">
              <i className="bi bi-linkedin fs-1 text-primary"></i>
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
            md={5}
            className="d-flex justify-content-between align-items-center"
          >
            <Nav
              //   className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="d-flex flex-column align-items-center">
                <i className="bi bi-house-fill fs-4"></i>
                <p className="m-0">Home</p>
              </Link>
              <Link className="d-flex flex-column align-items-center">
                <i className="bi bi-people-fill fs-4"></i>
                <p className="m-0">Rete</p>
              </Link>
              <Link className="d-flex flex-column align-items-center">
                <i className="bi bi-briefcase-fill fs-4"></i>
                <p className="m-0">Lavoro</p>
              </Link>
              <Link className="d-flex flex-column align-items-center">
                <i className="bi bi-chat-dots-fill fs-4"></i>
                <p className="m-0">Messaggistica</p>
              </Link>
              <Link className="d-flex flex-column align-items-center">
                <i className="bi bi-bell-fill fs-4"></i>
                <p className="m-0">Notifiche</p>
              </Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>

          <Col md={3}>
            <Link className="d-flex flex-column align-items-center">
              <i className="bi bi-grid-3x3-gap-fill fs-4"></i>
              <p className="m-0">Per le aziende</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default NavBarLinkIn;
