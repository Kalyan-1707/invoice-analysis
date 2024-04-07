import React from "react";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ProfessorProfilePage from "./Pages/ProfessorProfilePage/ProfessorProfilePage";
import StudentProfile from "./Pages/StudentProfile/StudentProfile";
import Applcations from "./Pages/StudentProfile/Applcations";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student/profile/edit" element={<StudentProfile />} />
        <Route path="/professor" element={<ProfessorProfilePage />} />
        <Route path="/student" element={<Applcations />} />
        {/* <Route path="/professor/:id"/>
        <Route path="/job-posting"/> */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
