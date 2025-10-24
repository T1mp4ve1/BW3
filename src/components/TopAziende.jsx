import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./css/TopAziende.css";

const TopAziende = () => {
  const [datiAziende, setDatiAziende] = useState([]);

  useEffect(() => {
    let fetchFatta = false;

    const fetchTopAziende = async () => {
      if (fetchFatta) return;
      fetchFatta = true;

      try {
        const res = await fetch(
          "https://strive-benchmark.herokuapp.com/api/jobs?company=Olla"
        );
        if (!res.ok) throw new Error("Errore nella fetch di TopAziende");

        const data = await res.json();
        setDatiAziende(data.data);
      } catch (error) {
        console.error("Errore nel fetch di TopAziende:", error);
      }
    };

    fetchTopAziende();
  }, []);

  return (
    <div className="job-section mt-4 pt-1">
      <h3>Le principali offerte di lavoro per te</h3>
      {datiAziende.length > 0 ? (
        datiAziende.map((azienda, idx) => {
          if (idx === 2) return null;
          return (
            <Card
              key={azienda._id}
              className="job-card mb-3 p-3"
              onClick={() => window.open(azienda.url, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <a
                href={azienda.url}
                target="_blank"
                rel="noreferrer"
                className="job-link"
              >
                <h3>{azienda.company_name}</h3>
                <h4>{azienda.title}</h4>
              </a>

              <div
                dangerouslySetInnerHTML={{
                  __html: azienda.description.slice(0, 100) + "...",
                }}
              ></div>
            </Card>
          );
        })
      ) : (
        <p>Caricamento degli annunci di lavoro...</p>
      )}
    </div>
  );
};

export default TopAziende;
