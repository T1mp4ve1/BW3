import {
  Container,
  Navbar,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./css/FooterLinkIn.css";

const FooterLinkIn = () => {
  return (
    <Container className="d-flex justify-content-center FooterContainer">
      <Row
        className="my-5"
        style={{
          width: "90%",
        }}
      >
        <Col className="d-flex flex-column">
          <a href="/" onClick={(e) => e.preventDefault()} className="mb-2">
            Informazioni
          </a>
          <a href="/" onClick={(e) => e.preventDefault()} className="mb-2">
            Informativa sulla community professionale
          </a>
          <a href="/" onClick={(e) => e.preventDefault()} className="mb-2">
            Privacy e condizioni
          </a>
          <a href="/" onClick={(e) => e.preventDefault()} className="mb-2">
            Sales Solutions
          </a>
          <a href="/" onClick={(e) => e.preventDefault()} className="mb-2">
            Centro sicurezza
          </a>
        </Col>
        <Col className="d-flex flex-column">
          {" "}
          <a href="/" onClick={(e) => e.preventDefault()} className="mb-2">
            Accessibilità
          </a>
          <a href="/" onClick={(e) => e.preventDefault()} className="mb-2">
            Carriera
          </a>
          <a href="/" onClick={(e) => e.preventDefault()} className="mb-2">
            Opzioni per gli annunci pubblicitari
          </a>
          <a href="/" onClick={(e) => e.preventDefault()} className="mb-2">
            Mobile
          </a>
        </Col>
        <Col className="d-flex flex-column">
          <a href="/" onClick={(e) => e.preventDefault()} className="mb-2">
            Talent Solutions
          </a>
          <a href="/" onClick={(e) => e.preventDefault()} className="mb-2">
            Soluzioni di marketing
          </a>
          <a href="/" onClick={(e) => e.preventDefault()} className="mb-2">
            Pubblicità
          </a>
          <a href="/" onClick={(e) => e.preventDefault()} className="mb-2">
            Piccole imprese
          </a>
        </Col>
        <Col className="d-flex flex-column grateLinks">
          <div className="d-flex">
            <i className="bi bi-question-circle-fill fs-4 text-dark me-2"></i>
            <div>
              <a href="/" onClick={(e) => e.preventDefault()}>
                Domande?
              </a>
              <p>Visita il nostro Centro assistenza</p>
            </div>
          </div>
          <div className="d-flex">
            <i className="bi bi-gear-fill fs-4 text-dark me-2"></i>
            <div>
              <a href="/" onClick={(e) => e.preventDefault()}>
                Gestisci il tuo account e la tua privacy
              </a>
              <p>Vai alle impostazioni</p>
            </div>
          </div>
          <div className="d-flex">
            <i className="bi bi-shield-shaded fs-4 text-dark me-2"></i>
            <div>
              <a href="/" onClick={(e) => e.preventDefault()}>
                Trasparenza sui contenuti consigliati
              </a>
              <p>Scopri di più sui contenuti consigliati.</p>
            </div>
          </div>
        </Col>
        <Col className="d-flex flex-column">
          <p>Seleziona lingua</p>
          <DropdownButton
            className="bg-light rounded-3"
            variant="outline-secondary"
            title="Italiano (Italiano)"
          >
            <Dropdown.Item eventKey="1">English (Inglese)</Dropdown.Item>
            <Dropdown.Item eventKey="2">Russian (Русский)</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Italiano (Italiano)
            </Dropdown.Item>
          </DropdownButton>
        </Col>
        <p>LinkedIn Corporation © 2025</p>
      </Row>
    </Container>
  );
};
export default FooterLinkIn;
