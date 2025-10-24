import { useState, useEffect } from "react";
import { Card, Button, Image, Form } from "react-bootstrap";
import styled from "styled-components";

export default function Home() {
  const [profileData, setProfileData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [allProfiles, setAllProfiles] = useState([]);
  const [postsData, setpostsData] = useState([]);
  const [newPost, setNewPost] = useState("");

  const [newImage, setNewImage] = useState(null);
  const [editingPostId, setEditingPostId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const API_KEY = import.meta.env.VITE_MY_SECRET_KEY;

  // ===== FETCH =====
  useEffect(() => {
    // profile
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: { Authorization: `Bearer ${API_KEY}` },
    })
      .then((res) => res.json())
      .then((data) => setProfileData([data]))
      .catch((err) => console.error("Errore profilo:", err));

    // experiemce
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/68f5f3a76dfc200015d3988e/experiences",
      {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
    )
      .then((res) => res.json())
      .then(setExperienceData)
      .catch((err) => console.error("Errore esperienze:", err));

    //tutti i profili
    fetch("https://striveschool-api.herokuapp.com/api/profile", {
      headers: { Authorization: `Bearer ${API_KEY}` },
    })
      .then((res) => res.json())
      .then(setAllProfiles)
      .catch((err) => console.error("Errore profili:", err));

    //   posts
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      headers: { Authorization: `Bearer ${API_KEY}` },
    })
      .then((res) => res.json())
      .then(setpostsData)
      .catch((err) => console.error("Errore posts:", err));
  }, [API_KEY]);

  //   add post
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            text: newPost,
          }),
        }
      );
      if (!res.ok) throw new Error("Errore nel post");
      const createdPost = await res.json();

      if (newImage) {
        const formData = new FormData();
        formData.append("post", newImage);

        const aploadImage = await fetch(
          `https://striveschool-api.herokuapp.com/api/posts/${createdPost._id}`,
          {
            method: "POST",
            headers: { Authorization: `Bearer ${API_KEY}` },
            body: formData,
          }
        );
        if (!aploadImage.ok) throw new Error("Errore nel post");
      }

      const postsRes = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: { Authorization: `Bearer ${API_KEY}` },
        }
      );
      const updatedPosts = await postsRes.json();
      setpostsData(updatedPosts);
      setNewPost("");
      setNewImage(null);
    } catch (err) {
      console.log("Errore POST", err);
    }
  };

  //   modifica
  const handleSubmitEdit = async (e, postId) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            text: editingText,
          }),
        }
      );

      if (!res.ok) throw new Error("Errore nel update");

      setpostsData((prev) =>
        prev.map((p) => (p._id === postId ? { ...p, text: editingText } : p))
      );
      setEditingPostId(null);
      setEditingText("");
    } catch (err) {
      console.log("Errore POST", err);
    }
  };

  //   delete
  const handleDelete = async (postId) => {
    try {
      setpostsData((prevPosts) => prevPosts.filter((p) => p._id !== postId));
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      if (!res.ok) throw new Error("ERRORE NEL DELETE");
    } catch (error) {
      console.error("ERRORE DELETE", error);
    }
  };

  return (
    <>
      {profileData.map((profile) => (
        <MainContainer key={profile._id}>
          {/* ===== LEFT SIDEBAR ===== */}
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
              <div>
                <p>
                  <strong>Profile viewers:</strong> 9
                </p>
                <p>
                  <strong>Connections:</strong> 500+
                </p>
              </div>
            </MiniCard>

            <MiniCard>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-bookmark-fill me-2 fs-5"></i>
                  <span className="small fw-semibold">Saved items</span>
                </div>

                <div className="d-flex align-items-center">
                  <i className="bi bi-people-fill me-2 fs-5"></i>
                  <span className="small fw-semibold">Groups</span>
                </div>

                <div className="d-flex align-items-center">
                  <i className="bi bi-newspaper me-2 fs-5"></i>
                  <span className="small fw-semibold">Newsletters</span>
                </div>

                <div className="d-flex align-items-center">
                  <i className="bi bi-calendar-event-fill me-2 fs-5"></i>
                  <span className="small fw-semibold">Events</span>
                </div>
              </div>
            </MiniCard>
          </LeftSidebar>

          {/* ===== POSTS ===== */}
          <div>
            <PostBox>
              <div className="d-flex align-items-center mb-3">
                <Image
                  src={profile.image}
                  width={48}
                  height={48}
                  roundedCircle
                  className="me-2"
                />
                <Form onSubmit={handleSubmit} className="w-100">
                  <Form.Control
                    className="rounded-pill flex-grow-1 text-start ps-3"
                    variant="outline-secondary"
                    type="text"
                    placeholder="Inserisci il tuo post"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                  ></Form.Control>
                  <Form.Control
                    type="file"
                    className="mt-2 rounded-pill"
                    onChange={(e) => setNewImage(e.target.files[0])}
                  />
                </Form>
              </div>
              <div className="d-flex justify-content-around"></div>
            </PostBox>

            {postsData.slice(-20).map((post) => (
              <Card key={post._id} className="mb-2 mt-3">
                <div className="d-flex justify-content-between p-3 pb-0">
                  <div className="d-flex pb-0">
                    <img
                      src={post.user.image}
                      style={{
                        width: "45px",
                        height: "45px",
                      }}
                      className="rounded-5 me-2"
                    />
                    <div>
                      <h6 className="m-0">
                        {post.user.name} {post.user.surname}{" "}
                        <i className="bi bi-shield-check"></i>
                      </h6>
                      <p
                        className="text-muted m-0"
                        style={{
                          fontSize: 13,
                        }}
                      >
                        {post.user.title}
                      </p>
                      <p
                        className="text-muted m-0"
                        style={{
                          fontSize: 13,
                        }}
                      >
                        {new Date(post.createdAt).toLocaleDateString("it-IT", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <Card.Body className="py-0">
                  {profileData[0]._id === post.user._id && (
                    <div className="text-end border-bottom">
                      <Button
                        variant="outline-light"
                        className="btn-sm me-2 rounded-2 border-0 border-start border-top"
                        onClick={() => {
                          setEditingPostId(post._id);
                          setEditingText(post.text);
                        }}
                      >
                        <i className="bi bi-pencil text-dark"></i>
                      </Button>
                      <Button
                        variant="outline-danger"
                        className="btn-sm rounded-2 border-0 border-end border-top"
                        onClick={() => handleDelete(post._id)}
                      >
                        <i className="bi bi-trash3"></i>
                      </Button>
                    </div>
                  )}
                  {editingPostId === post._id ? (
                    <Form
                      onSubmit={(e) => handleSubmitEdit(e, post._id)}
                      className="w-100 mb-3"
                    >
                      <Form.Control
                        className="rounded-pill flex-grow-1 text-start ps-3"
                        variant="outline-secondary"
                        type="text"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                      ></Form.Control>
                    </Form>
                  ) : (
                    <p>{post.text}</p>
                  )}
                </Card.Body>
                {post.image && (
                  <div>
                    <Card.Img
                      src={post.image}
                      alt="image"
                      className="rounded-0"
                    />
                  </div>
                )}

                {/* buttons */}
                <div className="d-flex justify-content-around border-top py-1">
                  <Button
                    variant="outline-light"
                    className="d-flex border-0 align-items-center text-secondary"
                  >
                    <i className="bi bi-hand-thumbs-up fs-5"></i>
                    <p
                      className="mb-0 ms-1 fw-bold"
                      style={{
                        fontSize: 13,
                      }}
                    >
                      Consiglia
                    </p>
                  </Button>
                  <Button
                    variant="outline-light"
                    className="d-flex border-0 align-items-center text-secondary"
                  >
                    <i className="bi bi-chat-left-text fs-5"></i>
                    <p
                      className="mb-0 ms-1 fw-bold"
                      style={{
                        fontSize: 13,
                      }}
                    >
                      Commenta
                    </p>
                  </Button>
                  <Button
                    variant="outline-light"
                    className="d-flex border-0 align-items-center text-secondary"
                  >
                    <i className="bi bi-arrow-repeat fs-5"></i>
                    <p
                      className="mb-0 ms-1 fw-bold"
                      style={{
                        fontSize: 13,
                      }}
                    >
                      Diffondi
                    </p>
                  </Button>
                  <Button
                    variant="outline-light"
                    className="d-flex border-0 align-items-center text-secondary"
                  >
                    <i className="bi bi-send fs-5"></i>
                    <p
                      className="mb-0 ms-1 fw-bold"
                      style={{
                        fontSize: 13,
                      }}
                    >
                      Invia
                    </p>
                  </Button>
                </div>
              </Card>
            ))}
            <p className="mt-2 text-secondary small">
              Explore the latest trends in Frontend & Backend Web Development.
            </p>
          </div>

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

            <MiniCard className="p-3 bg-white border rounded shadow-sm">
              <h6 className="fw-semibold mb-3">Add to your feed</h6>

              {allProfiles.slice(-4).map((profile) => (
                <div
                  key={profile._id}
                  className="d-flex flex-column align-items-start mb-3"
                >
                  {/* ==== Sezione immagine + testo ==== */}
                  <div className="d-flex align-items-center w-100 mb-1">
                    <img
                      src={profile.image}
                      alt={`${profile.name} ${profile.surname}`}
                      className="rounded-circle me-2"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <p className="mb-0 fw-semibold text-capitalize small">
                        {profile.name} {profile.surname}
                      </p>
                      <p className="mb-0 text-secondary small">
                        {profile.title || "profession not specified"}
                      </p>
                    </div>
                  </div>

                  {/* ==== Bottone follow ==== */}
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="rounded-pill fw-semibold px-3 ms-5"
                  >
                    + Follow
                  </Button>
                </div>
              ))}

              <a
                href="#"
                className="d-block text-center text-decoration-none mt-2 small fw-semibold"
              >
                View all recommendations →
              </a>
            </MiniCard>
          </RightSidebar>
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
  top: 20px;
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
