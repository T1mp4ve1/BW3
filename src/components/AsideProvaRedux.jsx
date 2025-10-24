import { Card, Button } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
// import "../components/css/Asidex.css";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProfiles } from "../redux/actions";
//partire dalla dispatch dei componenti + ispezionare in browser tramite dev tools come arrivano nello store, perchè se arr metti ogg si rompe//
const AsideProvaRedux = () => {
  const dispatch = useDispatch();
  const personeConsigliate = useSelector((state) => state.personeConsigliate.value);
  useEffect(() => {
    dispatch(fetchProfiles());
    // console.log(personeConsigliate);
  }, []);
  return (
    <aside className="fontSize mt-2">
      <Card className="mb-2 p-2">
        <h5>Persone che potresti conoscere</h5>
        {personeConsigliate.map((p, idx) => (
          <div key={idx} className="mb-2 border-bottom">
            <div className="d-flex align-items-center">
              <Link to={`/profile/${p._id}`} className="text-black d-flex" style={{ textDecoration: "none" }}>
                {/* <div className="d-flex"> */}
                <Person className="me-2" size={32} />
                <div>
                  <h5 className="m-0">
                    {p.name} {p.surname}
                  </h5>
                  <p className="m-0">{p.title}</p>
                </div>
                {/* </div> */}
              </Link>
            </div>
            <div className="d-flex justify-content-center mt-1 mb-2">
              <Button className="mt-1 mb-2 text-dark rounded-pill bg-white border-dark">Collegati</Button>
            </div>
          </div>
        ))}
        <Button className="mt-2 text-dark rounded-pill bg-white border-dark">Mostra tutto</Button>
      </Card>
    </aside>
  );
};
export default AsideProvaRedux;
