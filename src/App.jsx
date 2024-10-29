import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RestaurantSearchPage from './pages/RestaurantSearchPage';
import CustomerPreferencePage from './pages/CustomerPreferencePage';
import Register from './pages/Register';
import NearbyRestaurants from './pages/NearbyRestaurants';



import 'bootstrap/dist/css/bootstrap.min.css';


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
        <Route path='/Home' element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Search" element={<RestaurantSearchPage />} />
        <Route path="/Preferences" element={<CustomerPreferencePage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Map" element={<NearbyRestaurants />} />
      </Routes>
    </>
  )
}




export default App
