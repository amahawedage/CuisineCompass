import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar'; // Import Navbar Component
import '../styles/RestaurantSearchPage.css'; // Custom CSS

// Dummy restaurant data (replace with API data or database later)
const restaurantData = [
  { id: 1, name: 'Spicy Delight', cuisine: 'Sri Lankan', location: 'Dubai' },
  { id: 2, name: 'Curry Kingdom', cuisine: 'Indian', location: 'Abu Dhabi' },
  { id: 3, name: 'Flavor Town', cuisine: 'Sri Lankan', location: 'Sharjah' },
  { id: 4, name: 'Island Feast', cuisine: 'Sri Lankan', location: 'Dubai' },
];

export default function RestaurantSearchPage() {
  const [query, setQuery] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantData);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filtered = restaurantData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(value) ||
      restaurant.cuisine.toLowerCase().includes(value) ||
      restaurant.location.toLowerCase().includes(value)
    );

    setFilteredRestaurants(filtered);
  };

  return (
    <div className="restaurant-search-page">
      {/* Navbar */}
      <Navbar />

      {/* Search Section */}
      <div className="search-container">
        <h2>Find the Best Restaurants Near You</h2>
        <input
          type="text"
          placeholder="Search by name, cuisine, or location..."
          value={query}
          onChange={handleSearch}
        />
      </div>

      {/* Results Section */}
      <div className="results-container">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.cuisine}</p>
              <p>{restaurant.location}</p>
            </div>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
}
