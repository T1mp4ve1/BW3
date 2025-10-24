import { Container, Row, Col } from "react-bootstrap";
import LeftSideJobs from "../components/LeftSideJobs";
import JobLists from "../components/JobLists";
import TopAziende from "../components/TopAziende";
import NavBarLinkIn from "../components/NavBarLinkIn";
import FooterLinkIn from "../components/FooterLinkIn";

function Jobs() {
  return (
    <>
      <NavBarLinkIn />
      <Container fluid className="d-flex justify-content-center mt-1">
        <Row
          className="w-100 justify-content-center"
          style={{ maxWidth: "1200px" }}
        >
          {/* COLONNA SINISTRA */}

          <Col lg={4} md={5} sm={12}>
            <LeftSideJobs />
          </Col>

          {/* COLONNA DESTRA  */}

          <Col lg={8} md={7} sm={12}>
            <TopAziende />
            <JobLists />
          </Col>
        </Row>
      </Container>
      <FooterLinkIn className="mt-5" />
    </>
  );
}

export default Jobs;
