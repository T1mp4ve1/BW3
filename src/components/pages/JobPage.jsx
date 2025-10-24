import { Container, Row, Col } from "react-bootstrap";
import LeftSideJobs from "../LeftSideJobs";
import JobLists from "../JobList";
import TopAziende from "../TopAziende";

function JobsPage() {
  return (
    <Row className="justify-content-center mt-4">
      <Col lg={4} md={5} sm={12}>
        <LeftSideJobs />
      </Col>
      <Col lg={8} md={7} sm={12}>
        <TopAziende />
        <JobLists />
      </Col>
    </Row>
  );
}

export default JobsPage;
