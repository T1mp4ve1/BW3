import Asidex from "../components/Asidex";
import FooterLinkIn from "../components/FooterLinkIn";
import NavBarLinkIn from "../components/NavBarLinkIn";
import ProfileMain from "../components/ProfileMain";
import { Container, Row, Col } from "react-bootstrap";

function Profile() {
  return (
    <>
      <NavBarLinkIn />
      <Container fluid className="d-flex justify-content-center mt-1">
        <Row
          className="w-100 justify-content-center"
          style={{ maxWidth: "1200px" }}
        >
          <Col lg={8} md={7} sm={12}>
            <ProfileMain />
          </Col>
          <Col lg={4} md={5} sm={12}>
            <Asidex />
          </Col>
        </Row>
      </Container>
      <FooterLinkIn className="mt-5" />
    </>
  );
}

export default Profile;
