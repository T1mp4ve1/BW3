import { Row, Col } from "react-bootstrap";
import "./App.css";
import Asidex from "./components/Asidex";
import ProfileMain from "./components/ProfileMain";
import NavBarLinkIn from "./components/NavBarLinkIn";

function App() {
  return (
    <>
      <NavBarLinkIn />

      <Row>
        <Col className="col-sm-8">
          <ProfileMain />
        </Col>
        <Col className="col-sm-4">
          <Asidex />
        </Col>
      </Row>
    </>
  );
}

export default App;
