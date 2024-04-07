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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/student" element={<StudentProfile />}></Route>
        <Route path="/professor" element={<ProfessorProfilePage />}></Route>
        <Route path="*">
          Page not found
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
