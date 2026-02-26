import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Team from './pages/Team'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <footer className="footer">
        <strong>Dunder Mithlin Paper Company, Inc.</strong> &mdash; 1725 Slough Avenue, Scranton, PA 18505
      </footer>
    </BrowserRouter>
  )
}

export default App
