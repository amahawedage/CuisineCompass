import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import '../styles/NearbyRestaurants.css'; // Custom CSS for styling
import Navbar from '../components/navbar/Navbar'; // Import Navbar Component

const mapContainerStyle = {
  width: '60%', 
  height: '100vh'
};

const center = {
    lat: 6.927079, // Latitude of Galle Face Green, Colombo
    lng: 79.861244, // Longitude of Galle Face Green, Colombo
};

const mockRestaurants = [
    { id: 1, name: 'Ministry of Crab', cuisine: 'Seafood', lat: 6.9319, lng: 79.8423 },
    { id: 2, name: 'Chutneys', cuisine: 'South Indian', lat: 6.9225, lng: 79.8567 },
    { id: 3, name: 'The Lagoon', cuisine: 'Seafood', lat: 6.9185, lng: 79.8489 },
    { id: 4, name: 'Table One', cuisine: 'International Buffet', lat: 6.9242, lng: 79.8434 },
  ];
  

export default function NearbyRestaurants() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAefKPoZLafIdd6vG3x5J1hOfti8h0vvb0',
  });

  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(mockRestaurants);

  // Filter restaurants based on food preference
  useEffect(() => {
    if (selectedCuisine) {
      setFilteredRestaurants(
        mockRestaurants.filter((restaurant) => 
          restaurant.cuisine.toLowerCase().includes(selectedCuisine.toLowerCase())
        )
      );
    } else {
      setFilteredRestaurants(mockRestaurants);
    }
  }, [selectedCuisine]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="nearby-restaurants-page">
      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        center={center} 
        zoom={14}
      >
        {filteredRestaurants.map((restaurant) => (
          <Marker 
            key={restaurant.id} 
            position={{ lat: restaurant.lat, lng: restaurant.lng }} 
          />
        ))}
      </GoogleMap>

      <div className="restaurant-list">
        <h2>Nearby Restaurants</h2>
        <input 
          type="text" 
          placeholder="Filter by Cuisine..." 
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        />
        <ul>
          {filteredRestaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <h3>{restaurant.name}</h3>
              <p>Cuisine: {restaurant.cuisine}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
