import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import NavBar from "./Screens/NavBar";
import About from "./Screens/About";
import Lifestyle from "./Screens/Lifestyle";
import Conditions from "./Screens/Conditions";
import Alphabet from "./Screens/Alphabet";
import Footer from "./Screens/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/condition" element={<Conditions />} />
        <Route path="/alphabet" element={<Alphabet />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
