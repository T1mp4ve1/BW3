import { useState, useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import styled from "styled-components";
// import PreferencesSVG from "../assets/preferencesSvg.svg";
// import SavedSVG from "../assets/savedSVG.svg";
// import Insights from "../assets/insights.svg";
// import PostJob from "../assets/postJob.svg";

export default function LeftSideJobs() {
  const [profileData, setProfileData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  const API_KEY = import.meta.env.VITE_MY_SECRET_KEY;

  // ===== FETCH =====
  useEffect(() => {
    // PROFILE
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: { Authorization: `Bearer ${API_KEY}` },
    })
      .then((res) => res.json())
      .then((data) => setProfileData([data]))
      .catch((err) => console.error("Errore profilo:", err));

    // EXPERIENCE
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/68f5f3a76dfc200015d3988e/experiences",
      {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
    )
      .then((res) => res.json())
      .then(setExperienceData)
      .catch((err) => console.error("Errore esperienze:", err));
  }, [API_KEY]);

  return (
    <>
      {profileData.map((profile) => (
        <MainContainer key={profile._id}>
          <LeftSidebar>
            <ProfileCard>
              <Cover />
              <ProfileImage src={profile.image} alt="profile" />
              <div className="text-center mt-5"></div>
              <SmallInfo>
                {experienceData.slice(0, 2).map((exp) => (
                  <div key={exp._id} className="d-flex align-items-center mb-2">
                    <div>
                      <h6 className="fw-semibold mb-0">
                        {profile.name} {profile.surname}
                      </h6>
                      <p
                        className="fw-semibold mb-0"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {exp.role}
                      </p>
                      <p className="text-secondary small">
                        {profile.area}, Lazio
                      </p>

                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "0.8rem" }}
                      >
                        <Image
                          src={exp.image}
                          width={32}
                          height={32}
                          roundedCircle
                          className="me-2"
                        />
                        {exp.company}
                      </p>
                    </div>
                  </div>
                ))}
              </SmallInfo>
            </ProfileCard>

            <MiniCard>
              <div className="mb-3">
                <img src={"PreferencesSVG"} alt="preferences" /> Preferences
              </div>
              <div className="mb-3">
                <img src={"SavedSVG"} alt="preferences" /> My jobs
              </div>
              <div className="mb-3">
                <img src={"Insights"} alt="preferences" /> My Career Insights
              </div>
              <hr />
              <div className="mb-3 text-primary">
                <img src={"PostJob"} alt="preferences" /> Post a job with AI
              </div>
            </MiniCard>
          </LeftSidebar>
        </MainContainer>
      ))}
    </>
  );
}

/* ====== STYLED COMPONENTS ====== */

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 18px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 40px;
  background-color: #f3f2ef;
  min-height: 100vh;

  @media (max-width: 1200px) {
    grid-template-columns: 260px 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const LeftSidebar = styled.div`
  min-width: 260px;
`;

const RightSidebar = styled.div`
  min-width: 260px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

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
