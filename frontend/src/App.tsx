// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnalysisPage from "./components/AnalysisPage";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { LanguageProvider } from "@/components/provider/language-provider";
import About from "./pages/About";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/result" element={<AnalysisPage />} />{" "}
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
