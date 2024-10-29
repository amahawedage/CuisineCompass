import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import '../styles/NearbyRestaurants.css'; // Custom CSS for styling
import Navbar from '../components/navbar/Navbar'; // Import Navbar Component

const mapContainerStyle = {
  width: '60%', 
  height: '100vh'
};

const center = {
  lat: 40.748817, // Default to New York City (replace with dynamic location)
  lng: -73.985428,
};

const mockRestaurants = [
  { id: 1, name: 'Pizza Palace', cuisine: 'Italian', lat: 40.7498, lng: -73.9876 },
  { id: 2, name: 'Sushi Central', cuisine: 'Japanese', lat: 40.7484, lng: -73.9821 },
  { id: 3, name: 'Taco Fiesta', cuisine: 'Mexican', lat: 40.7465, lng: -73.9842 },
  { id: 4, name: 'Burger Town', cuisine: 'American', lat: 40.7473, lng: -73.9867 },
];

export default function NearbyRestaurants() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyApdnBLqJeWM4c5t1Z32v8BzVBWvWJnY1g',
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
