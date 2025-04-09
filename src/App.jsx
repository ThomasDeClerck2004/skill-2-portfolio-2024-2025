import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

// Page sections
import { Nav, Footer } from "./components";
import IndexPage from "./pages/indexPage";
import ProjectPage from "./pages/projectPage";

function Main() {
	return (
    <Routes>
      <Route path={'/'} element={<IndexPage />} />
      <Route path={'/about'} element={<IndexPage />} />
      <Route path={'/work'} element={<IndexPage />} />
      <Route path={'/contact'} element={<IndexPage />} />
      <Route path={'/projects'} element={<ProjectPage />} />
    </Routes>
	);
}

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#000301]">
        <Nav />
          <Main />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
