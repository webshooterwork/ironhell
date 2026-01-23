import {  Routes, Route } from "react-router";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Programs from "./Pages/Programs";
import Trainers from "./Pages/Trainers";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
   <>
    <Navbar />

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

     


     <Footer />
   
   </> 
   
  );
}

export default App;
