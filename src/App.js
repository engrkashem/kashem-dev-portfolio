import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";


function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
    </div>
  );
}

export default App;
