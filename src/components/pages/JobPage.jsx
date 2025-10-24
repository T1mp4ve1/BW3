import { Container, Row, Col } from "react-bootstrap";
import LeftSideJobs from "../LeftSideJobs";
import JobLists from "../JobList";
import TopAziende from "../JobList";

function JobsPage() {
  return (
    <Container fluid className="d-flex justify-content-center mt-1">
      <Row className="justify-content-center">
        <Col lg={4} md={5} sm={12}>
          <LeftSideJobs />
        </Col>
        <Col lg={8} md={7} sm={12} className="mt-4">
          <TopAziende />
          <JobLists />
        </Col>
      </Row>
    </Container>
  );
}

export default JobsPage;
