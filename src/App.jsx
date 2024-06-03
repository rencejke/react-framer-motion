import {Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { AnimatePresence } from 'framer-motion'
import Projects from "./components/pages/Projects";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";

function App() {
  const location = useLocation();
  
  return (

    <AnimatePresence mode='wait'> 
       <Routes location={location} key={location.pathname}>
        {/* Page Example **/}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />


        {/* Not Found Page Uses **/}
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>

    </AnimatePresence>
     
  );
}
export default App;