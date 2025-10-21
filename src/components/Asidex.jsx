import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Globe, People, Person } from "react-bootstrap-icons";
import "./css/asidex.css";

const Asidex = () => {
  const [personeConsigliate, setPersoneConsigliate] = useState([]);

  const aziendeConsigliate = [
    { name: "Azienda1", descrizione: "Servizi digitali", followers: "12k" },
    { name: "Azienda2", descrizione: "Consulenza IT", followers: "8k" },
    { name: "Azienda3", descrizione: "Marketing online", followers: "20k" },
    { name: "Azienda4", descrizione: "Formazione tech", followers: "15k" },
    { name: "Azienda5", descrizione: "E-commerce solutions", followers: "9k" },
    { name: "Azienda6", descrizione: "Servizi cloud", followers: "5k" },
  ];
  const companies = [
    { name: "Azienda A", descizione: "la descrizione" },
    { name: "Azienda A", descizione: "la descrizione" },
    { name: "Azienda B", descizione: "la descrizione" },
    { name: "Azienda C", descizione: "la descrizione" },
    { name: "Azienda D", descizione: "la descrizione" },
    { name: "Azienda E", descizione: "la descrizione" },
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
        setPersoneConsigliate(data.slice(0, 5));
      } catch (error) {
        console.error("Errore nel fetch:", error);
      }
    };
    fetchProfiles();
  }, []);
  return (
    <aside className="p-3 fontSize mt-2" style={{ width: "300px" }}>
      <Card className="mb-3 p-2 " style={{ height: "180px" }}>
        <h5 className="mb-2">Lingua del profilo</h5>
        <p>Italiano</p>
        <hr />
        <h5>Profilo pubblico e URL</h5>
        <p>www.linkcausale.com</p>
      </Card>

      <Card className="mb-3 p-2">
        <div className="d-flex align-items-center mb-2">
          <Globe className="me-2" />
          <h5 className="m-0">
            a sinistra sarà dobbiamo metterci un icona//Titolo annuncio
          </h5>
        </div>
        <p>Dettagli dell'annuncio qui...</p>
        <Button className="text-dark rounded-pill bg-white border-dark">
          Segui
        </Button>
      </Card>

      <Card className="mb-3 p-2">
        <h5>Altri profili consultati</h5>
        <p>Solo per te</p>
        {companies.slice(0, 2).map((p, idx) => (
          <div key={idx} className="mb-2 border-bottom">
            <div className="d-flex align-items-center">
              <Person className="me-2" size={32} />
              <div>
                <h5 className="m-0">
                  {p.name} {p.descrizione} — {""}
                </h5>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-1 mb-2">
              <Button className="mt-1 mb-2 text-dark rounded-pill bg-white border-dark ">
                Visualizza
              </Button>
            </div>
          </div>
        ))}
      </Card>

      <Card className="mb-3 p-2">
        <h5>Persone che potresti conoscere</h5>
        {personeConsigliate.slice(0, 2).map((p, idx) => (
          <div key={idx} className="mb-2 border-bottom">
            <div className="d-flex align-items-center">
              <Person className="me-2" size={32} />
              <div>
                <h5 className="m-0">
                  {p.name} {p.surname}
                </h5>
                <p className="m-0">{p.title}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-1 mb-2">
              <Button className="mt-1 mb-2 text-dark rounded-pill bg-white border-dark">
                Collegati
              </Button>
            </div>
          </div>
        ))}
        <Button className="mt-2 text-dark rounded-pill bg-white border-dark">
          Mostra tutto
        </Button>
      </Card>

      <Card className="p-2">
        <h5>Potrebbe interessarti</h5>
        <p>Pagine per te</p>
        {aziendeConsigliate.slice(0, 2).map((a, idx) => (
          <div key={idx} className="mb-2 border-bottom">
            <div className="d-flex align-items-center">
              {/* people è un icona come globe */}
              <People className="me-2" size={32} />
              <div>
                <h5 className="m-0">{a.name}</h5>
                <p className="m-0">{a.descrizione}</p>
                <p className="m-0">{a.followers} follower</p>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-1 mb-2">
              <Button className="mt-1 mb-2 text-dark rounded-pill bg-white border-dark">
                Segui
              </Button>
            </div>
          </div>
        ))}
        <Button className="mt-2 text-dark rounded-pill bg-white border-dark">
          Mostra tutto
        </Button>
      </Card>
    </aside>
  );
};
export default Asidex;
