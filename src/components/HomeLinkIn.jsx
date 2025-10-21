import { Container, Row, Col } from "react-bootstrap";

const HomeLinkIn = () => {
  return (
    <Container className="d-flex justify-content-center FooterContainer">
      <Row
        className="m-0"
        style={{
          width: "90%",
        }}
      >
        <Col className="d-flex justify-content-center my-5">
          <h2>HOME PAGE</h2>
        </Col>
      </Row>
    </Container>
  );
};
export default HomeLinkIn;
