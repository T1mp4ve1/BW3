import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Asidex from "./components/Asidex";
import ProfileMain from "./components/ProfileMain";
import NavBarLinkIn from "./components/NavBarLinkIn";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBarLinkIn />
        <Container>
          <Row>
            <Col className="col-sm-8">
              <Routes>
                <Route path="/" element={<ProfileMain />} />
              </Routes>
            </Col>
            <Col className="col-sm-4">
              <Asidex />
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
