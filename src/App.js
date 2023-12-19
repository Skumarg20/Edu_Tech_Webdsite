import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Mentorship from "./components/Mentorship";
import Iitjee from "./components/Iitjee";
import Neet from "./components/Neet";
import Counselling from "./components/Counselling";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="Mentorship" element={<Mentorship />} />
          <Route path="Iitjee" element={<Iitjee />} />
          <Route path="Counselling" element={<Counselling />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Neet" element={<Neet />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;