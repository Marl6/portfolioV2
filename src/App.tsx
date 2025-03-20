import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#8A2BE2",
          colorLink: "#1E90FF",
        },
      }}
    >
    <Router basename="/portfolioV2">
      <Navbar />
      <Routes>

        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </ConfigProvider>
  );
}

export default App;
