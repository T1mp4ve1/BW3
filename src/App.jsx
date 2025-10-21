import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBarLinkIn from "./components/NavBarLinkIn";
import { Container } from "react-bootstrap";
import FooterLinkIn from "./components/FooterLinkIn";
import ProfileMain from "./components/ProfileMain";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarLinkIn />
        <Container>
          <Routes>
            <Route path="/" element={<ProfileMain />} />
          </Routes>
        </Container>
        <FooterLinkIn />
      </BrowserRouter>
    </>
  );
}

export default App;
