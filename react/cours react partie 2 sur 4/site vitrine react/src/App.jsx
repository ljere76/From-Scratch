import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet-1" element={<Project1 />} />
        <Route path="/projet-2" element={<Project2 />} />
        <Route path="/projet-3" element={<Project3 />} />
        <Route path="/projet-4" element={<Project4 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
