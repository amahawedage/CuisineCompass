import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/HomePage'

function App() {
  const location = useLocation()
  return (
    <>
      {!location.pathname.match(/(login|register|forgot|reset|demo)/) && (
        <header>
          <Navbar />
        </header>
      )}
      <Routes key={location.key}>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
