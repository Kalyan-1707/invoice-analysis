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
import Pages from "./Pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages.LandingPage />}></Route>
        {/* <Route path="/student"></Route> */}
        <Route path="/professor/profile" element={<Pages.ProfessorProfilePage />}>
        </Route>
        <Route path="/applications"></Route>
        <Route path="/job-posting"></Route>
      </Routes>
    </Router>
  );
};

export default App;
