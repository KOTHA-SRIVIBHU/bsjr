import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Components/About'
import MI from './Components/MI'
import Courses from './Components/Courses'
import Staff from './Components/Staff'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Home from './Components/Home'

const App = () => {
  return (
    <Router>
      <div data-theme="fantasy">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={
              <Home />
            } />
            <Route path="/staff" element={<Staff />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
export default App
