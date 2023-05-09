import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MainCard from "./components/MainCard";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbars from "./components/Navbar";
import View from "./components/View";

function App() {
  return (
    <>
      <Navbars />

      <Routes>
        <Route path="/" element={<MainCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view-product/:id" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
