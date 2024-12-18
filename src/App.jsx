import { React } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import NavBar from './pages/NavBar'
import Home from './pages/Homescreen/Index'

import './App.css'

function App() {

  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='*' element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
