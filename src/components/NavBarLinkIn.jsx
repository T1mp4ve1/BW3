import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { Link } from "react-router";
import "./css/NavBarLinkIn.css";
import imagePlaceHolder from "../assets/logo.png";
import { useEffect, useState } from "react";

const NavBarLinkIn = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const API_KEY =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGY1ZTkyNDZkZmMyMDAwMTVkMzk4OGEiLCJpYXQiOjE3NjA5NDY0NjgsImV4cCI6MTc2MjE1NjA2OH0.vfTreQVrxZKrni-xT2m7ZyRkBXyqogwoRZAlwlxXckc";
    const url = "https://striveschool-api.herokuapp.com/api/profile/me";

    fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProfileData(data))
      .catch((err) => console.error("Errore:", err));
  }, []);

  return (
    <Navbar expand="lg" className="bg-light py-1 border-bottom fixed-top">
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
            <Nav className="d-flex flex-row justify-content-around align-items-center">
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
                  align={"end"}
                  title={<span className="d-none d-lg-inline">Tu</span>}
                  id="navbarScrollingDropdown"
                >
                  <div
                    className="p-3 dropDownMenu"
                    href="#action1"
                    style={{
                      width: "300px",
                    }}
                  >
                    <div className="d-flex">
                      <img
                        className="rounded-5 me-2"
                        src={profileData.image}
                        alt="profileImage"
                        style={{
                          width: "55px",
                          height: "55px",
                        }}
                      />
                      <div>
                        <h6 className="m-0">
                          {profileData.name} {profileData.surname}
                        </h6>
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
                          <p
                            style={{
                              fontSize: 14,
                              fontWeight: 600,
                            }}
                          >
                            Visualiza profilo
                          </p>
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
                align={"end"}
                title={
                  <span className="d-none d-lg-inline">Per le aziende</span>
                }
                id="navbarScrollingDropdown"
              >
                <Card
                  className="d-flex flex-row justify-content-between p-4 border-0"
                  style={{
                    width: "650px",
                  }}
                >
                  <div>
                    <h5 className="mb-3">Le mie app</h5>
                    <div
                      className="d-flex flex-column ms-2"
                      id="aziendeCardLeft"
                    >
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="d-flex align-items-center mb-3"
                      >
                        <i class="bi bi-compass-fill text-primary fs-4 me-2"></i>
                        <p>Vendi</p>
                      </a>
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="d-flex align-items-center mb-3"
                      >
                        <i class="bi bi-microsoft-teams text-primary fs-4 me-2"></i>
                        <p>Gruppi</p>
                      </a>
                      <p className="text-secondary talent mt-2">Talent</p>
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="d-flex align-items-center mb-3"
                      >
                        <i class="bi bi-person-fill-check text-primary fs-4 me-2"></i>
                        <p>Talent Insights</p>
                      </a>
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="d-flex align-items-center mb-3"
                      >
                        <i class="bi bi-bag-plus-fill text-primary fs-4 me-2"></i>
                        <p>Pubblica un’offerta di lavoro</p>
                      </a>
                      <p className="text-secondary talent mt-2">Vendite</p>
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="d-flex align-items-center mb-3"
                      >
                        <i class="bi bi-patch-check-fill text-primary fs-4 me-2"></i>
                        <p>Marketplace dei servizi</p>
                      </a>

                      <p className="text-secondary talent mt-2">Marketing</p>
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="d-flex align-items-center mb-3"
                      >
                        <i class="bi bi-bullseye text-primary fs-4 me-2"></i>
                        <p>Pubblicizza</p>
                      </a>

                      <p className="text-secondary talent mt-2">Learning</p>
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="d-flex align-items-center mb-3"
                      >
                        <i class="bi bi-play-btn-fill text-primary fs-4 me-2"></i>
                        <p>Learning</p>
                      </a>
                    </div>
                  </div>

                  <div className="border-start ps-5" id="aziendeCardRight">
                    <h5 className="mb-3">Scopri altro per il business</h5>
                    <a href="/" onClick={(e) => e.preventDefault()}>
                      <p className="p1">Assumi su LinkedIn</p>
                      <p className="mb-3">Trova, attrai e assumi</p>
                    </a>

                    <a href="/" onClick={(e) => e.preventDefault()}>
                      <p className="p1">Vendi con LinkedIn</p>
                      <p className="mb-3">
                        Sblocca nuove opportunità di vendita
                      </p>
                    </a>

                    <a href="/" onClick={(e) => e.preventDefault()}>
                      <p className="p1">Offerta di lavoro gratuita</p>
                      <p className="mb-3">
                        Ottieni rapidamente candidati qualificati
                      </p>
                    </a>

                    <a href="/" onClick={(e) => e.preventDefault()}>
                      <p className="p1">Fai pubblicità su LinkedIn</p>
                      <p className="mb-3">
                        Acquisisci clienti e fai crescere la tua azienda
                      </p>
                    </a>

                    <a href="/" onClick={(e) => e.preventDefault()}>
                      <p className="p1">Inizia con Premium</p>
                      <p className="mb-3">Amplia e sfrutta la tua rete</p>
                    </a>

                    <a href="/" onClick={(e) => e.preventDefault()}>
                      <p className="p1">Impara con LinkedIn</p>
                      <p className="mb-3">
                        Corsi per formare i tuoi dipendenti
                      </p>
                    </a>

                    <a href="/" onClick={(e) => e.preventDefault()}>
                      <p className="p1">Centro per amministratori</p>
                      <p className="mb-3">
                        Gestisci i dettagli di fatturazione e account
                      </p>
                    </a>
                    <a
                      href="/"
                      onClick={(e) => e.preventDefault()}
                      className="d-flex align-items-center"
                    >
                      <p className="p1">Crea una pagina aziendale </p>
                      <i class="bi bi-plus p1 fs-4"></i>
                    </a>
                  </div>
                </Card>
              </NavDropdown>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default NavBarLinkIn;
