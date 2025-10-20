import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Asidex from "./components/Asidex";
import ProfileMain from "./components/ProfileMain";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-sm-8">
            <ProfileMain />
          </Col>
          <Col className="col-sm-4">
            <Asidex />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
