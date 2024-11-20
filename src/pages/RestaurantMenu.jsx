import React, { useState } from 'react';
import '../styles/RestaurantMenu.css';

export default function RestaurantMenu() {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    imageUrl: '',
    description: '',
    category: '',
    preferences: [],
  });

  const foodCategories = ['Select Food Category', 'Main Meals', 'Drinks'];
  const mealPreferences = ['Spicy Food', 'Vegetarian', 'Seafood', 'Meat', 'Halal', 'Gluten Free'];
  const drinkPreferences = ['Tea', 'Coffee', 'Juices', 'Coconut Water', 'Alcoholic', 'Non Alcoholic'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleCheckboxChange = (preference) => {
    setNewItem((prev) => {
      const updatedPreferences = prev.preferences.includes(preference)
        ? prev.preferences.filter((p) => p !== preference)
        : [...prev.preferences, preference];
      return { ...prev, preferences: updatedPreferences };
    });
  };

  const handleAddItem = () => {
    if (!newItem.name || !newItem.price || !newItem.imageUrl || newItem.category === 'Select Food Category') {
      alert('Please fill all required fields.');
      return;
    }
    setMenuItems([...menuItems, newItem]);
    setNewItem({
      name: '',
      price: '',
      imageUrl: '',
      description: '',
      category: '',
      preferences: [],
    });
  };

  const handleDeleteItem = (index) => {
    const updatedMenu = menuItems.filter((_, i) => i !== index);
    setMenuItems(updatedMenu);
  };

  const getPreferences = () => {
    if (newItem.category === 'Main Meals') {
      return mealPreferences;
    }
    if (newItem.category === 'Drinks') {
      return drinkPreferences;
    }
    return [];
  };

  return (
    <div className="restaurant-menu">
      <h1>Restaurant Menu</h1>

      {/* Add New Menu Item */}
      <div className="add-menu-item">
        <h2>Add New Menu Item</h2>
        
        <div className="input-row">
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={newItem.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newItem.price}
            onChange={handleInputChange}
          />
        </div>
        
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={newItem.imageUrl}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newItem.description}
          onChange={handleInputChange}
        />
        <select
          name="category"
          value={newItem.category}
          onChange={handleInputChange}
        >
          {foodCategories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {newItem.category !== 'Select Food Category' && (
          <div className="preferences">
            <p>Preferences:</p>
            {getPreferences().map((pref, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={newItem.preferences.includes(pref)}
                  onChange={() => handleCheckboxChange(pref)}
                />
                {pref}
              </label>
            ))}
          </div>
        )}

        <button onClick={handleAddItem}>Add Item</button>
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        <h2>Menu Items</h2>
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="menu-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Category: {item.category}</p>
              <p>Preferences: {item.preferences.join(', ') || 'None'}</p>
            </div>
            <button className="delete-button" onClick={() => handleDeleteItem(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
