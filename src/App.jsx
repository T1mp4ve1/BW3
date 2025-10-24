import "./App.css";
import FooterLinkIn from "./components/FooterLinkIn";
import NavBarLinkIn from "./components/NavBarLinkIn";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SearchPage from "./pages/SearchPage";
import Jobs from "./pages/Jobs";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBarLinkIn />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:userId" element={<Profile />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>

      <div className="mt-5">
        <FooterLinkIn />
      </div>
    </>
  );
}
