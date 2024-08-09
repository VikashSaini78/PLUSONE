import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from './Component/Home';
import Classes from './Classes/Classes';
import About from './about/About';
import Plans from './about/Plans';
import Contact from './about/Contact';


function App() {
  return (  
    <>

  <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Classes" element={<Classes/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Plans" element={<Plans/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;