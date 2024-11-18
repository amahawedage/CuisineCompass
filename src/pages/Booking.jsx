import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar'; // Import Navbar Component
import '../styles/Booking.css'; // Import CSS

const Booking = () => {
  const [formData, setFormData] = useState({
    city: '',
    restaurant: '',
    date: '',
    time: '',
    guests: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <div className="booking-container">
      <h2>Book a Table</h2>
      <p>Reserve your spot at your favorite Sri Lankan restaurant</p>

      <form onSubmit={handleSubmit}>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a City
          </option>
          <option value="Colombo">Colombo</option>
          <option value="Kandy">Kandy</option>
          <option value="Galle">Galle</option>
        </select>

        <select
          name="restaurant"
          value={formData.restaurant}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a Restaurant
          </option>
          <option value="The Lagoon">The Lagoon</option>
          <option value="Ministry of Crab">Ministry of Crab</option>
          <option value="Nihonbashi">Nihonbashi</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={formData.guests}
          onChange={handleChange}
          required
          min="1"
        />

        <textarea
          name="notes"
          placeholder="Special Notes (optional)"
          value={formData.notes}
          onChange={handleChange}
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
