import { useState, useEffect } from "react";
import { Card, Button, Image } from "react-bootstrap";
import styled from "styled-components";

export default function ProfileMain() {
  const [profileData, setProfileData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_MY_SECRET_KEY;
    const url = "https://striveschool-api.herokuapp.com/api/profile/me";

    fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProfileData([data]))
      .catch((err) => console.error("Errore:", err));
  }, []);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_MY_SECRET_KEY;
    const url =
      "https://striveschool-api.herokuapp.com/api/profile/68f5f3a76dfc200015d3988e/experiences";

    fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setExperienceData(data))
      .catch((err) => console.error("Errore:", err));
  }, []);

  return (
    <>
      {profileData.map((myData) => (
        <div key={myData._id} className="mx-2">
          {/* ===== PROFILE SECTION ===== */}

          <ProfileCard>
            <ProfileCover />
            <Card.Body className="position-relative bg-white pt-0 pb-3">
              <ProfilePictureWrapper>
                <ProfilePicture src={myData.image} alt="profile" />
              </ProfilePictureWrapper>

              <ProfileInfo>
                <h5 className="fw-semibold mb-0">
                  {myData.name} {myData.surname}
                </h5>
                <p className="text-muted mb-0">
                  {`${myData.title} | ${myData.bio}`}
                </p>
                <p className="text-secondary mb-1">{myData.area}</p>
                <p className="text-secondary">500+ connections</p>

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
                    Add section
                  </OutlineButton>
                  <OutlineButton
                    variant="outline-secondary"
                    size="sm"
                    className="rounded-pill px-3 fw-semibold"
                  >
                    Enhance profile
                  </OutlineButton>
                </div>
              </ProfileInfo>
            </Card.Body>
          </ProfileCard>

          {/* ===== ABOUT ===== */}
          <ProfileCard className="p-3">
            <h5 className="fw-semibold mb-2">About</h5>
            <p className="text-secondary mb-0">
              Passionate about technology and problem-solving, {myData.name} is
              a motivated developer focused on creating efficient, scalable
              solutions and improving user experiences.
            </p>
          </ProfileCard>

          {/* ===== EXPERIENCE ===== */}
          {experienceData.map((exp) => (
            <ProfileCard key={exp._id} className="p-3">
              <h5 className="fw-semibold mb-3">Experience</h5>

              <div className="d-flex mb-3">
                <Image
                  src={exp.image}
                  alt="Fiverr"
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
                    {exp.startDate} | {exp.endDate}
                  </p>
                  <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            </ProfileCard>
          ))}
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
                <p
                  className="text-secondary mb-0"
                  style={{ fontSize: "0.85rem" }}
                >
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
                Strong understanding of ES6+, async programming, and modern
                syntax.
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
      ))}
    </>
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
  top: calc(200px - 250px); /* foto a metà tra blu e bianco */
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

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
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

  .text-muted {
    color: #666 !important;
  }

  .text-secondary {
    color: #6b6b6b !important;
  }

  @media (max-width: 768px) {
    margin-top: 70px;
  }

  @media (max-width: 480px) {
    h5 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;
const PrimaryButton = styled(Button)`
  background-color: #0a66c2 !important;
  border: none !important;
  font-weight: 600 !important;

  &:hover {
    background-color: #004182 !important;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem !important;
    padding: 4px 10px !important;
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

  @media (max-width: 768px) {
    font-size: 0.85rem !important;
    padding: 4px 10px !important;
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
