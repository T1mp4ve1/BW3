import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBarLinkIn from "./components/NavBarLinkIn";
import { Col, Container, Row } from "react-bootstrap";
import FooterLinkIn from "./components/FooterLinkIn";
import ProfileMain from "./components/pages/ProfileMain";
import Asidex from "./components/Asidex";
import HomeLinkIn from "./components/pages/HomeLinkIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarLinkIn />
        <Container className="d-flex justify-content-center">
          <Routes>
            <Route path="/" element={<HomeLinkIn />} />
            <Route
              path="/profile"
              element={
                <Row className="d-flex justify-content-center">
                  <Col xs={8} className="p-0">
                    <ProfileMain />
                  </Col>
                  <Col xs={4} className="p-0">
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
