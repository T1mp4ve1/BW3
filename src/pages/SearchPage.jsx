import { useState, useEffect } from "react";
import { Badge, Card, Col, ListGroup, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import "../components/css/SearchPage.css";
import NavBarLinkIn from "../components/NavBarLinkIn";
import FooterLinkIn from "../components/FooterLinkIn";

export default function SearchPage() {
  const [searchData, setsearchData] = useState([]);
  const API_KEY = import.meta.env.VITE_MY_SECRET_KEY;
  const { query } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`,
      {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
    )
      .then((res) => res.json())
      .then((dataRecived) => {
        setIsSelected(dataRecived.data[0]);
        setsearchData(dataRecived.data);
      })
      .catch((err) => console.error("Errore profilo:", err))
      .finally(() => setIsLoading(false));
  }, [API_KEY, query]);

  if (isLoading) {
    return (
      <>
        <Spinner animation="grow" />
      </>
    );
  }

  return (
    <>
      <NavBarLinkIn />
      <Row className="mb-5">
        <Col xs={6}>
          <Card
            className="mt-5 p-4"
            style={{ height: "88vh", overflowY: "auto" }}
          >
            <Card.Title> Offerte di lavoro</Card.Title>
            <ListGroup className="border-0">
              {searchData.map((company) => (
                <div
                  key={company._id}
                  onClick={() => setIsSelected(company)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <ListGroup.Item
                    className={`${
                      company._id === isSelected._id
                        ? "border-primary bg-light"
                        : "border-white"
                    } border-start border-0 border-2 rounded-0`}
                  >
                    <div className="d-flex justify-content-between">
                      <h6>{company.title}</h6>
                      <Badge bg="light" className="ms-3">
                        <p className="m-0 text-muted">
                          {company.job_type !== ""
                            ? company.job_type
                            : "unknown"}
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
                </div>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col xs={6}>
          <Card
            className="mt-5 p-4"
            style={{ height: "88vh", overflowY: "auto" }}
          >
            <Card.Title>Dettagli</Card.Title>
            <div
              className="descriptionContainer"
              dangerouslySetInnerHTML={{
                __html: isSelected ? isSelected.description : "",
              }}
            />
          </Card>
        </Col>
      </Row>
      <FooterLinkIn className="mt-5" />
    </>
  );
}
