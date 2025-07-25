// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnalysisPage from "./components/AnalysisPage";
import { ThemeProvider } from "@/components/provider/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<AnalysisPage />} />{" "}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
