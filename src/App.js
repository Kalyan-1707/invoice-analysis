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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/professor/profile" element={<ProfessorProfilePage />}>
        </Route>
        <Route path="/applications"></Route>
        <Route path="/job-posting"></Route>
        <Route path="*">
          Page not found
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
