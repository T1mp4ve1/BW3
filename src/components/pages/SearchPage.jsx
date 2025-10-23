import { useState, useEffect } from "react";
import { Badge, Card, ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router";
import { useParams } from "react-router";

export default function SearchPage() {
  const [searchData, setsearchData] = useState([]);
  const API_KEY = import.meta.env.VITE_MY_SECRET_KEY;
  const { query } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=10`,
      {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
    )
      .then((res) => res.json())
      .then((dataRecived) => setsearchData(dataRecived.data))
      .catch((err) => console.error("Errore profilo:", err))
      .finally(() => setIsLoading(false));
  }, [query]);

  if (isLoading) {
    return (
      <>
        <Spinner animation="grow" />
      </>
    );
  }

  return (
    <>
      <Card className="mt-5 p-4">
        <Card.Title> Offerte di lavoro</Card.Title>
        <ListGroup className="border-0">
          {searchData.map((company) => (
            <Link
              key={company._id}
              to={"/"}
              style={{
                textDecoration: "none",
              }}
            >
              <ListGroup.Item className="border-0 border-bottom rounded-0">
                <div className="d-flex justify-content-between">
                  <h6>{company.title}</h6>
                  <Badge bg="light" className="ms-3">
                    <p className="m-0 text-muted">
                      {company.job_type !== "" ? company.job_type : "unknown"}
                    </p>
                  </Badge>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-buildings me-2 text-primary"></i>
                  <p className="m-0">{company.company_name}</p>
                </div>

                <div className="d-flex align-items-center">
                  <i className="bi bi-tag fs-5 me-2 text-primary"></i>
                  <p className="m-0 text-muted">{company.category}</p>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  <p
                    className="m-0 ms-4 text-muted"
                    style={{
                      fontSize: 12,
                    }}
                  >
                    added:
                  </p>
                  <p
                    className="m-0 ms-2 text-muted"
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {new Date(company.publication_date).toLocaleDateString(
                      "it-IT",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>
              </ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      </Card>
    </>
  );
}
