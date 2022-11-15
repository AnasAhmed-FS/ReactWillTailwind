import "./App.css";
import Navpar from "./components/Navpar";
import Home from "./components/Home";
import About from "./components/About";
import { TailWindCss } from "./components/TailWindCss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 ">
      <Router>
        <Navpar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tail" element={<TailWindCss />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
