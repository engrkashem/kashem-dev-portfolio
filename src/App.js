import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer/Footer";
import ProjectsDetails from "./Components/Shared/ProjectsDetails";
import { createContext } from "react";
import useProjects from "./hooks/useProjects";

export const ProjectsContext = createContext();

function App() {
  const [projects] = useProjects();

  return (
    <ProjectsContext.Provider value={projects}>
      <div className="max-w-7xl mx-auto relative">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/:projectId" element={<ProjectsDetails />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="projects/:projectId" element={<ProjectsDetails />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </ProjectsContext.Provider>
  );
}

export default App;
