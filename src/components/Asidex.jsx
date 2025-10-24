import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Globe, People, Person } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../components/css/Asidex.css";

const Asidex = () => {
  const [personeConsigliate, setPersoneConsigliate] = useState([]);

  const aziendeConsigliate = [
    { name: "Azienda1", descrizione: "Servizi digitali", followers: "12k" },
    { name: "Azienda2", descrizione: "Consulenza IT", followers: "8k" },
  ];

  const companies = [
    { name: "Azienda A", descrizione: "Settore tecnologico" },
    { name: "Azienda B", descrizione: "Consulenza software" },
  ];

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const token = import.meta.env.VITE_MY_SECRET_KEY;
        const res = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setPersoneConsigliate(data.slice(0, 3));
      } catch (error) {
        console.error("Errore nel fetch:", error);
      }
    };
    fetchProfiles();
  }, []);

  return (
    <aside className="asidex-container mt-2">
      {/* ====== LINGUA E URL ====== */}
      <Card className="asidex-card">
        <h5 className="asidex-title">Lingua del profilo</h5>
        <p className="asidex-text">Italiano</p>
        <hr />
        <h5 className="asidex-title">Profilo pubblico e URL</h5>
        <p className="asidex-text">www.linkcausale.com</p>
      </Card>

      {/* ====== ANNUNCIO ====== */}
      <Card className="asidex-card">
        <div className="asidex-icon-title">
          <Globe className="asidex-icon" />
          <h5 className="asidex-title mb-0">Annuncio di lavoro</h5>
        </div>
        <p className="asidex-text">Dettagli dell'annuncio qui...</p>
        <Button className="asidex-btn">Visualizza</Button>
      </Card>

      {/* ====== AZIENDE ====== */}
      <Card className="asidex-card">
        <h5 className="asidex-title">Profili visualizzati</h5>
        <p className="asidex-subtext">Solo per te</p>
        {companies.map((p, idx) => (
          <div key={idx} className="asidex-item">
            <div className="asidex-item-content">
              <Person className="asidex-icon" size={30} />
              <div>
                <h6 className="asidex-item-name">{p.name}</h6>
                <p className="asidex-subtext">{p.descrizione}</p>
              </div>
            </div>
            <Button className="asidex-btn">Visualizza</Button>
          </div>
        ))}
      </Card>

      {/* ====== PERSONE ====== */}
      <Card className="asidex-card">
        <h5 className="asidex-title">Persone che potresti conoscere</h5>
        {personeConsigliate.map((p, idx) => (
          <div key={idx} className="asidex-item">
            <Link
              to={`/profile/${p._id}`}
              className="asidex-link d-flex align-items-center"
            >
              <Person className="asidex-icon" size={30} />
              <div>
                <h6 className="asidex-item-name">
                  {p.name} {p.surname}
                </h6>
                <p className="asidex-subtext">{p.title}</p>
              </div>
            </Link>
            <Button className="asidex-btn">Collegati</Button>
          </div>
        ))}
        <Button className="asidex-btn-secondary">Mostra tutto</Button>
      </Card>

      {/* ====== POTREBBE INTERESSARTI ====== */}
      <Card className="asidex-card">
        <h5 className="asidex-title">Potrebbe interessarti</h5>
        <p className="asidex-subtext">Pagine per te</p>
        {aziendeConsigliate.map((a, idx) => (
          <div key={idx} className="asidex-item">
            <div className="asidex-item-content">
              <People className="asidex-icon" size={30} />
              <div>
                <h6 className="asidex-item-name">{a.name}</h6>
                <p className="asidex-subtext">{a.descrizione}</p>
                <p className="asidex-subtext">{a.followers} follower</p>
              </div>
            </div>
            <Button className="asidex-btn">Segui</Button>
          </div>
        ))}
        <Button className="asidex-btn-secondary">Mostra tutto</Button>
      </Card>
    </aside>
  );
};

export default Asidex;
