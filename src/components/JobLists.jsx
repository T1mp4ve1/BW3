import { useState, useEffect } from "react";
import { Spinner, Card } from "react-bootstrap";
import styled from "styled-components";

export default function JobLists() {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_MY_SECRET_KEY;

  useEffect(() => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs?limit=10", {
      headers: { Authorization: `Bearer ${API_KEY}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setJobData([...data.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore nel caricamento dei lavori:", err);
        setLoading(false);
      });
  }, [API_KEY]);

  return (
    <>
      <h4 className="mb-3 fw-bold">Lavori che ti potrebbero interessare</h4>

      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2 text-muted">Loading jobs...</p>
        </div>
      ) : jobData.length === 0 ? (
        <p className="text-center text-muted mt-5">No job results found.</p>
      ) : (
        <JobsCard className="border rounded bg-white shadow-sm">
          {jobData.map((job, index) => (
            <div
              key={job._id || job.url}
              className={`py-3 px-3 ${
                index < jobData.length - 1 ? "border-bottom" : ""
              }`}
              onClick={() => window.open(job.url, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <a
                href={job.url}
                target="_blank"
                rel="noreferrer"
                className="fw-semibold text-decoration-none text-dark"
              >
                {job.title}
              </a>
              <p className="mb-0 text-secondary">{job.company_name}</p>
              <p className="mb-1 text-muted small">
                {job.candidate_required_location}
              </p>
              <p className="text-muted small">
                Promoted · Be an early applicant
              </p>
            </div>
          ))}
        </JobsCard>
      )}
    </>
  );
}

/* ====== STYLED COMPONENTS ====== */

const JobsCard = styled(Card)`
  border-radius: 10px;
  overflow: hidden;
  background: #fff;

  div:hover {
    background-color: #f3f2ef;
  }

  a {
    font-size: 15px;
  }
`;
