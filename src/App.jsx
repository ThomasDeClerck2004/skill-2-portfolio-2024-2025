import { Route, Routes } from 'react-router-dom'
import './App.css'

// Page sections
import Header from './components/header'
import Footer from './components/footer'

// Pages
import Home from './pages/home'
import About from './pages/about'
import Achievements from './pages/achievements'

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/achievements' element={<Achievements />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
