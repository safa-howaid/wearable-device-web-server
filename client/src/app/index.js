import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing, UsersList } from "../pages";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route basename="/" path="/" exact element={<Landing />} />
        <Route basename="/users" path="/users/" exact element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
