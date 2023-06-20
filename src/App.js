import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import All_cat from "./pages/All_cat";
import Typenews from "./pages/Typenews";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Countrys from "./pages/Countrys";
import Countrynews from "./pages/Countrynews";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes className="App">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<All_cat />} />
        <Route path="/categories/:id" element={<Typenews />} />
        <Route path="/country" element={<Countrys />} />
        <Route path="/country/:id" element={<Countrynews />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
