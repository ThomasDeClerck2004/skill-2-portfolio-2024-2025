import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import './index.css';

// Page sections
import { Nav, Footer, Hero, About, Work, Contact } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#000301]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Nav />
            <Hero />
        </div>
            <About />
            <Work />
            <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
