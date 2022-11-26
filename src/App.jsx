import React from 'react'
import styles from './style'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/navbar.jsx'
import Menu from "./components/menu/menu.jsx";

function App() {
    return (
      <div>
          <Router>
              <Routes>
                  <Route path="/" element={<Navbar />} />
                  <Route path="/menu" element={<Menu />} />
              </Routes>
          </Router>
      </div>
    )
  }

  export default App;