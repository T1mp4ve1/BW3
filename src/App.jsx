import "./App.css";
import { BrowserRouter, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBarLinkIn from "./components/NavBarLinkIn";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid className="bg-dark">
          <NavBarLinkIn />
          <Routes></Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
