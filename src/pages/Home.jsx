import { useState, useEffect } from "react";
import { Card, Button, Image } from "react-bootstrap";
import styled from "styled-components";

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [experiences, setExperiences] = useState([]);

  const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGY1ZjNhNzZkZmMyMDAwMTVkMzk4OGUiLCJpYXQiOjE3NjA5NDkxNTksImV4cCI6MTc2MjE1ODc1OX0.gqqN2lVthoiffLa3428v52flN37Ms2JA0gaRl5xAYf4";

  useEffect(() => {
    const headers = { Authorization: `Bearer ${API_KEY}` };

    fetch("https://striveschool-api.herokuapp.com/api/profile/me", { headers })
      .then((res) => res.json())
      .then(setProfile)
      .catch(console.error);

    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/68f5f3a76dfc200015d3988e/experiences",
      { headers }
    )
      .then((res) => res.json())
      .then(setExperiences)
      .catch(console.error);
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <MainContainer>
      {/* ===== LEFT SIDEBAR ===== */}
      <LeftSidebar>
        <ProfileCard>
          <Cover />
          <ProfileImage src={profile.image} alt="profile" />
          <div className="text-center mt-5">
            <h6 className="fw-semibold mb-0">
              {profile.name} {profile.surname}
            </h6>
            <p className="text-muted small mb-0">{profile.title}</p>
            <p className="text-secondary small">{profile.area}</p>
          </div>
          <hr />
          <SmallInfo>
            <p>
              <strong>Profile viewers:</strong> 9
            </p>
            <p>
              <strong>Connections:</strong> 500+
            </p>
          </SmallInfo>
        </ProfileCard>

        <MiniCard>
          <h6 className="fw-semibold mb-1">Recent Experiences</h6>
          {experiences.slice(0, 2).map((exp) => (
            <div key={exp._id} className="d-flex align-items-center mb-2">
              <Image
                src={exp.image}
                width={32}
                height={32}
                roundedCircle
                className="me-2"
              />
              <div>
                <p className="fw-semibold mb-0" style={{ fontSize: "0.9rem" }}>
                  {exp.role}
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "0.8rem" }}>
                  {exp.company}
                </p>
              </div>
            </div>
          ))}
        </MiniCard>
      </LeftSidebar>

      {/* ===== POSTS ===== */}
      <Feed>
        <PostBox>
          <div className="d-flex align-items-center mb-3">
            <Image
              src={profile.image}
              width={48}
              height={48}
              roundedCircle
              className="me-2"
            />
            <Button
              className="rounded-pill flex-grow-1 text-start ps-3"
              variant="outline-secondary"
            >
              Start a post
            </Button>
          </div>
          <div className="d-flex justify-content-around">
            <Button variant="light">📸 Photo</Button>
            <Button variant="light">🎥 Video</Button>
            <Button variant="light">📰 Write article</Button>
          </div>
        </PostBox>

        <Card className="p-3 mt-3">
          <h6 className="fw-semibold">Suggested Post</h6>
          <Image
            src="https://cdn.dribbble.com/users/220238/screenshots/14020867/media/8cc2fa27cc70e7c4c8de8a2cc37b22f1.png"
            alt="Post"
            fluid
            className="rounded mt-2"
          />
          <p className="mt-2 text-secondary small">
            Explore the latest trends in Frontend & Backend Web Development.
          </p>
        </Card>
      </Feed>

      {/* ===== RIGHT SIDEBAR ===== */}
      <RightSidebar>
        <MiniCard>
          <h6 className="fw-semibold mb-2">Suggested for you</h6>
          <p className="small mb-1">💼 Google Developers</p>
          <p className="small mb-1">🏦 CIBC Canada</p>
          <p className="small mb-1">💻 Iris Software Inc.</p>
        </MiniCard>

        <MiniCard>
          <h6 className="fw-semibold mb-2">Today's puzzle games</h6>
          <p className="small mb-0">🧩 Sudoku Mini</p>
          <p className="small mb-0">🟧 Zip Path</p>
          <p className="small mb-0">🔷 Tango Grid</p>
        </MiniCard>
      </RightSidebar>
    </MainContainer>
  );
}

/* ====== STYLED COMPONENTS ====== */

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  padding: 20px;
  background-color: #f3f2ef;
  min-height: 100vh;
`;

const LeftSidebar = styled.div``;

const Feed = styled.div`
  max-width: 700px;
`;

const RightSidebar = styled.div``;

const ProfileCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 1rem;
`;

const Cover = styled.div`
  height: 60px;
  background: linear-gradient(90deg, #004182, #0077b5);
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid white;
  position: absolute;
  top: 30px;
  left: 20%;
  transform: translateX(-50%);
  background: white;
`;

const SmallInfo = styled.div`
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  color: #333;
`;

const MiniCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-bottom: 1rem;
`;

const PostBox = styled(Card)`
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;
