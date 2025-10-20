import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProfileMain() {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const API_KEY =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGY1ZjNhNzZkZmMyMDAwMTVkMzk4OGUiLCJpYXQiOjE3NjA5NDkxNTksImV4cCI6MTc2MjE1ODc1OX0.gqqN2lVthoiffLa3428v52flN37Ms2JA0gaRl5xAYf4";
    const url = "https://striveschool-api.herokuapp.com/api/profile/me";

    fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => {
        console.log("Risultato:", res);
        return res.json();
      })
      .then((data) => {
        console.log("Dati ricevuti:", data);
        setProfileData([data]);
      })
      .catch((err) => {
        console.error("Errore:", err);
      });
  }, []);

  return (
    <>
      {profileData.map((myData) => (
        <Card key={myData._id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{myData.name + myData.surname}</Card.Title>
            <Card.Text>{myData.title}</Card.Text>
            <Card.Text>{myData.bio}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
