import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar'; // Import Navbar Component
import '../styles/CustomerPreferencePage.css'; // Import CSS

export default function CustomerPreferencePage() {
  const [preferences, setPreferences] = useState({
    mainMeals: [],
    drinks: [],
  });

  const foodOptions = {
    mainMeals: ['Spicy Food', 'Vegetarian', 'Seafood', 'Meat', 'Halal', 'Gluten Free'],
    drinks: ['Tea', 'Coffee', 'Juices', 'Coconut Water', 'Alcoholic', 'Non Alcoholic'],
  };

  const handleCheckboxChange = (category, item) => {
    setPreferences((prev) => {
      const updatedCategory = prev[category].includes(item)
        ? prev[category].filter((i) => i !== item)
        : [...prev[category], item];
      return { ...prev, [category]: updatedCategory };
    });
  };

  const handleSavePreferences = () => {
    console.log('Saved Preferences:', preferences);
    // Add logic to save preferences (e.g., API request)
  };

  return (
    <div className="customer-preference-page">
      <Navbar />
      <div className="preference-container">
        <h2>Your Culinary Preferences</h2>

        <div className="preference-tables">
          {/* Main Meals Table */}
          <div className="table-container">
            <h3>Main Meals</h3>
            <table className="preference-table">
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Meal Type</th>
                </tr>
              </thead>
              <tbody>
                {foodOptions.mainMeals.map((meal, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        checked={preferences.mainMeals.includes(meal)}
                        onChange={() => handleCheckboxChange('mainMeals', meal)}
                      />
                    </td>
                    <td>{meal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Drinks Table */}
          <div className="table-container">
            <h3>Drinks</h3>
            <table className="preference-table">
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Drink Type</th>
                </tr>
              </thead>
              <tbody>
                {foodOptions.drinks.map((drink, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        checked={preferences.drinks.includes(drink)}
                        onChange={() => handleCheckboxChange('drinks', drink)}
                      />
                    </td>
                    <td>{drink}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <button className="btn-save" onClick={handleSavePreferences}>
          Save Preferences
        </button>
      </div>
    </div>
  );
}
