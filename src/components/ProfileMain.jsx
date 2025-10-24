import { useState, useEffect } from "react";
import { Card, Button, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function ProfileMain() {
  const [profileData, setProfileData] = useState(null);
  const [experienceData, setExperienceData] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_MY_SECRET_KEY;
    const url = userId
      ? `https://striveschool-api.herokuapp.com/api/profile/${userId}`
      : "https://striveschool-api.herokuapp.com/api/profile/me";

    fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProfileData(data))
      .catch((err) => console.error("Errore nel profilo:", err));
  }, [userId]);

  useEffect(() => {
    if (!profileData?._id) return;

    const API_KEY = import.meta.env.VITE_MY_SECRET_KEY;
    const url = `https://striveschool-api.herokuapp.com/api/profile/${profileData._id}/experiences`;

    fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setExperienceData(data))
      .catch((err) => console.error("Errore nelle esperienze:", err));
  }, [profileData]);

  if (!profileData) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="mx-2">
      {/* ===== PROFILE SECTION ===== */}
      <ProfileCard>
        <ProfileCover />
        <Card.Body className="position-relative bg-white pt-0 pb-3">
          <ProfilePictureWrapper>
            <ProfilePicture src={profileData.image} alt="profile" />
          </ProfilePictureWrapper>

          <ProfileInfo>
            <h5 className="fw-semibold mb-0">
              {profileData.name} {profileData.surname}
            </h5>
            <p className="text-muted mb-0">
              {`${profileData.title || ""} ${
                profileData.bio ? " | " + profileData.bio : ""
              }`}
            </p>
            <p className="text-secondary mb-1">{profileData.area}</p>
            <p className="text-secondary">
              <a href="#" style={{ textDecoration: "none" }}>
                500+ connections
              </a>
            </p>

            {!userId && (
              <div className="d-flex flex-wrap mt-3 gap-2">
                <PrimaryButton
                  variant="primary"
                  size="sm"
                  className="rounded-pill px-3 fw-semibold"
                >
                  Open to work
                </PrimaryButton>
                <OutlineButton
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-pill px-3 fw-semibold"
                >
                  Aggiungi sezione
                </OutlineButton>
                <OutlineButton
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-pill px-3 fw-semibold"
                >
                  Migliora il profilo
                </OutlineButton>
                <OutlineButton
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-pill px-3 fw-semibold"
                >
                  Risorse
                </OutlineButton>
              </div>
            )}
          </ProfileInfo>
        </Card.Body>
      </ProfileCard>

      {/* ===== ABOUT ===== */}
      <ProfileCard className="p-3">
        <h5 className="fw-semibold mb-2">About</h5>
        <p className="text-secondary mb-0">
          Passionate about technology and problem-solving, {profileData.name} is
          a motivated developer focused on creating efficient, scalable
          solutions and improving user experiences.
        </p>
      </ProfileCard>

      {/* ===== EXPERIENCE ===== */}
      <ProfileCard className="p-3">
        <h5 className="fw-semibold mb-3">Experiences</h5>
        {experienceData.length > 0 ? (
          experienceData.map((exp) => (
            <div key={exp._id} className="d-flex mb-3">
              <Image
                src={exp.image}
                alt={exp.company}
                roundedCircle
                width={48}
                height={48}
                className="me-3"
              />
              <div>
                <h6 className="mb-0 fw-semibold">{exp.role}</h6>
                <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
                  {exp.company}
                </p>
                <p
                  className="text-secondary mb-1"
                  style={{ fontSize: "0.85rem" }}
                >
                  {" Start Date: "}
                  {new Date(exp.startDate).toLocaleDateString()} {" | "}
                  {" End Date:  "}
                  {new Date(exp.endDate).toLocaleDateString()}{" "}
                </p>
                <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-secondary mb-0">No experiences added yet.</p>
        )}
      </ProfileCard>

      {/* ===== EDUCATION ===== */}
      <ProfileCard className="p-3">
        <h5 className="fw-semibold mb-3">Education</h5>
        <div className="d-flex">
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/d/d9/Centennial_College_logo.svg"
            alt="Centennial College"
            roundedCircle
            width={48}
            height={48}
            className="me-3"
          />
          <div>
            <h6 className="mb-0 fw-semibold">Centennial College</h6>
            <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
              Associate’s Degree, Computer Software Engineering
            </p>
            <p className="text-secondary mb-0" style={{ fontSize: "0.85rem" }}>
              2021 – 2023
            </p>
          </div>
        </div>
      </ProfileCard>

      {/* ===== SKILLS ===== */}
      <ProfileCard className="p-3 mb-5">
        <h5 className="fw-semibold mb-3">Skills</h5>

        <SkillItem>
          <p className="fw-semibold mb-1">JavaScript</p>
          <p className="text-secondary mb-2" style={{ fontSize: "0.9rem" }}>
            Strong understanding of ES6+, async programming, and modern syntax.
          </p>
          <hr />
        </SkillItem>

        <SkillItem>
          <p className="fw-semibold mb-1">React.js</p>
          <p className="text-secondary mb-2" style={{ fontSize: "0.9rem" }}>
            Experienced in building responsive UI components and state
            management.
          </p>
          <hr />
        </SkillItem>

        <SkillItem>
          <p className="fw-semibold mb-1">Node.js</p>
          <p className="text-secondary mb-2" style={{ fontSize: "0.9rem" }}>
            Capable of designing RESTful APIs and server-side applications.
          </p>
        </SkillItem>
      </ProfileCard>
    </div>
  );
}

/* ====== STYLED COMPONENTS ====== */

const ProfileCard = styled(Card)`
  border: none;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  overflow: hidden;
  background-color: #fff;
  margin-top: 0.5rem;
`;

const ProfileCover = styled.div`
  background: linear-gradient(90deg, #004182, #0077b5);
  height: 200px;
  width: 100%;
  position: relative;
`;

const ProfilePictureWrapper = styled.div`
  position: absolute;
  top: calc(200px - 250px);
  left: 24px;
  z-index: 5;
`;

const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  object-fit: cover;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const ProfileInfo = styled.div`
  position: relative;
  margin-top: 80px;
  color: #000;
  z-index: 2;

  h5 {
    font-size: 1.2rem;
    color: #0a66c2;
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #0a66c2 !important;
  border: none !important;
  font-weight: 600 !important;
  &:hover {
    background-color: #004182 !important;
  }
`;

const OutlineButton = styled(Button)`
  border-color: #ddd !important;
  color: #444 !important;
  font-weight: 600 !important;
  &:hover {
    background-color: #f3f2ef !important;
    border-color: #ccc !important;
  }
`;

const SkillItem = styled.div`
  padding: 8px 0;
  p {
    margin: 0;
  }
  hr {
    margin: 10px 0;
    border: none;
    border-top: 1px solid #e6e6e6;
  }
`;
