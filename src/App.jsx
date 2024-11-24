import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LearningPathDetails from "./pages/LearningPathDetails";
import Quiz from "./components/Quiz";
import './index.css';
import About from "./pages/About"; // Example About Page
// import Contact from "./pages/Contact"; // Example Contact Page
// import NotFound from "./pages/NotFound"; // 404 Page

const App = () => (
  <Router>
    <Routes>
    <Route path="/" element={<Quiz />} />
      {/* Home/Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Learning Path Details */}
      <Route path="/learning-path/:fabricName" element={<LearningPathDetails />} />

      {/* Quiz Page (if separate navigation is needed) */}
      <Route path="/quiz" element={<Quiz />} />

      {/* Additional Pages */}
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Contact />} /> */}

      {/* Catch-All for Undefined Routes */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Router>
);

export default App;
