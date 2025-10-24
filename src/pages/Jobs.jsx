import { Container, Row, Col } from "react-bootstrap";
import LeftSideJobs from "../components/LeftSideJobs";
import JobLists from "../components/JobLists";
import TopAziende from "../components/TopAziende";

function Jobs() {
  return (
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
  );
}

export default Jobs;
