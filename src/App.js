import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import DisegniPage from "./components/DisegniPage";
import TatuaggiPage from "./components/TatuaggiPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/disegnipage" element={<DisegniPage />} />
        <Route path="/tatuaggipage" element={<TatuaggiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
