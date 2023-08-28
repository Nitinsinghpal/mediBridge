import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Lifestyle from "./Screens/Lifestyle";
import Conditions from "./Screens/Conditions";
import Alphabet from "./Screens/Alphabet";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/lifestyle" element={<Lifestyle/>}/>
<Route path="/condition" element={<Conditions/>}/>
<Route path="/alphabet" element={<Alphabet/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
