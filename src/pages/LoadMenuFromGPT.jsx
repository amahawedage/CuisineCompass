import React, { useState } from 'react';
import axios from 'axios';  // For making API requests
import '../styles/LoadMenuFromGPT.css';

export default function LoadMenuFromGPT() {
  const [foodType, setFoodType] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = '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';  // Replace with your actual ChatGPT API Key

  const handleFoodTypeChange = (e) => {
    setFoodType(e.target.value);
  };

  const handleReset = () => {
    setFoodType('');
    setMenuItems([]);
  };

  const handleSearch = async () => {
    if (!foodType) {
      alert('Please specify a food type');
      return;
    }

    setLoading(true);

    try {
      const prompt = `Give me a list of Food Menu Items for ${foodType} with the restaurant details and location. Output should be listed in a table format with columns "Item Name", "Description", "Price LKR".`;

      // Make the API request to the ChatGPT endpoint
      const response = await axios.post(
        'https://chatgpt.com/g/g-673d6702ec448191ba8b1daf6134cdb3-sri-lankan-food/c/673d683f-e53c-8001-be88-0bfde494e3af',
        { prompt },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,  // Use API Key for authentication
          }
        }
      );

      // Assuming the API returns data in a structured format, we'll set the menu items
      setMenuItems(response.data.menuItems);  // Adjust according to actual response structure
    } catch (error) {
      console.error('Error fetching data from GPT:', error);
      alert('Failed to load data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="load-menu">
      <h1>Load Menu From GPT</h1>

      <div className="search-bar">
        <input
          type="text"
          value={foodType}
          onChange={handleFoodTypeChange}
          placeholder="Specify Your Food Type"
        />
        <button className='btn-search' onClick={handleSearch} disabled={loading}>
          {loading ? 'Loading...' : 'Search'}
        </button>
        <button className='btn-cancel' onClick={handleReset}>Reset</button>
      </div>

      {/* Table for displaying menu items */}
      {menuItems.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Description</th>
              <th>Price LKR</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* If no results, show message */}
      {menuItems.length === 0 && !loading && <p>No menu items found. Try searching again.</p>}
    </div>
  );
}
