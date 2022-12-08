import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing, UsersList, UserDetails } from "../pages";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/users/" exact element={<UsersList />} />
        <Route path="/users/:id" exact element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
