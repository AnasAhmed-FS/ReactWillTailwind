import "./App.css";
import Navpar from "./components/Navpar";
import Home from "./components/Home";
import About from "./components/About";
import { TailWindCss } from "./components/TailWindCss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className=" bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white ">
      <Router>
        <Navpar />
        <Routes>
          <Route exact path="/ReactWillTailwind/" element={<Home />} />
          <Route path="/ReactWillTailwind/about" element={<About />} />
          <Route path="/ReactWillTailwind/tail" element={<TailWindCss />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
