import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBarLinkIn from "./components/NavBarLinkIn";
import { Col, Container, Row } from "react-bootstrap";
import FooterLinkIn from "./components/FooterLinkIn";
import ProfileMain from "./components/ProfileMain";
import Asidex from "./components/Asidex";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarLinkIn />
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <Row>
                  <Col xs={8} className="d-flex justify-content-center">
                    <ProfileMain />
                  </Col>
                  <Col xs={4} className="d-flex justify-content-center">
                    <Asidex />
                  </Col>
                </Row>
              }
            />
          </Routes>
        </Container>
        <FooterLinkIn />
      </BrowserRouter>
    </>
  );
}

export default App;
