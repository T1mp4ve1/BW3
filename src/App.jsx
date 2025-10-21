import "./App.css";
import { BrowserRouter, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBarLinkIn from "./components/NavBarLinkIn";
import { Container } from "react-bootstrap";
import Asidex from "./componentsAside/Asidex";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarLinkIn />
        <Routes></Routes>
        <Asidex />
      </BrowserRouter>
    </>
  );
}

export default App;
