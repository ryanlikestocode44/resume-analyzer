// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnalysisPage from "./components/AnalysisPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<AnalysisPage />} />{" "}
        {/* <- Ini penting */}
      </Routes>
    </Router>
  );
}

export default App;
