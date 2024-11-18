import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar'; // Import Navbar Component
import '../styles/Register.css'; // Import CSS

export default function RegistrationPage() {
  const [formType, setFormType] = useState(null); // Track which form is displayed

  return (
    <div className="registration-page">
      {!formType && (
        <div className="icon-selection text-center">
          <h2 style={{ marginBottom: '30px' }}>Select Registration Type</h2>
          <div className="icon-container">
            <div 
              className="icon-card" 
              onClick={() => setFormType('customer')}
            >
              <img src="src/images/Icons/RegisterCustomer.png" alt="Customer" />
              <h4>Customer Registration</h4>
            </div>
            <div 
              className="icon-card" 
              onClick={() => setFormType('restaurant')}
            >
              <img src="src/images/Icons/RegisterRestaurent.png" alt="Restaurant" />
              <h4>Restaurant Registration</h4>
            </div>
          </div>
        </div>
      )}

      {formType === 'customer' && <CustomerRegistrationForm setFormType={setFormType} />}
      {formType === 'restaurant' && <RestaurantRegistrationForm setFormType={setFormType} />}
    </div>
  );
}

function CustomerRegistrationForm({ setFormType }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    contactMethod: '',
    role: 'customer'
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch("http://localhost:9002/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Registration successful!");
      } else {
        setMessage(data.message || "Registration failed.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <img src="src/images/Icons/RegisterCustomer.png" alt="Customer" style={{ width: '113px', height: '113px', display: 'block', margin: '0 auto' }} />
      <h2>Customer Registration</h2>
      <input type="hidden" name="role" value="customer" placeholder="role" required onChange={handleChange} />
      <input type="email" name="username" placeholder="Username (Email)" required onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
      <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
      <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
      <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
      <input type="date" name="dateOfBirth" placeholder="Date of Birth" required onChange={handleChange} />
      <input type="text" name="address" placeholder="Street Address" required onChange={handleChange} />
      <input type="text" name="city" placeholder="City" required onChange={handleChange} />
      <select name="contactMethod" required onChange={handleChange}>
        <option value="">Preferred Contact Method</option>
        <option value="email">Email</option>
        <option value="sms">SMS</option>
        <option value="phone">Phone</option>
      </select>
      <div className="button-group">
        <button type="submit" className="btn-submit">Submit</button>
        <button type="button" className="btn-cancel" onClick={() => setFormType(null)}>
          Cancel
        </button>
      </div>
      {message && <p className="message">{message}</p>}
    </form>
  );
}

function RestaurantRegistrationForm({ setFormType }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    restaurantName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    cuisineType: '',
    registrationNumber: '',
    website: '',
    socialMedia: '',
    seatingCapacity: '',
    hours: '',
    deliveryOptions: '',
    takeoutOptions: '',
    paymentMethods: '',
    description: '',
    role: 'restaurant'
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch("http://localhost:9002/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {  
        setMessage("Registration successful!");
      } else {
        setMessage(data.message || "Registration failed.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <img src="src/images/Icons/RegisterRestaurent.png" alt="Restaurant" style={{ width: '113px', height: '113px', display: 'block', margin: '0 auto' }} />
      <h2>Restaurant Registration</h2>
      <input type="email" name="username" placeholder="Username (Email)" required onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
      <input type="hidden" name="role" placeholder="role" value="restaurant" required onChange={handleChange} />
      <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
      <input type="text" name="restaurantName" placeholder="Restaurant Name" required onChange={handleChange} />
      <input type="text" name="ownerName" placeholder="Owner Name" required onChange={handleChange} />
      <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
      <input type="text" name="address" placeholder="Street Address" required onChange={handleChange} />
      <input type="text" name="city" placeholder="City" required onChange={handleChange} />
      <input type="text" name="cuisineType" placeholder="Type of Cuisine" required onChange={handleChange} />
      <input type="text" name="registrationNumber" placeholder="Business Registration Number" required onChange={handleChange} />
      <input type="url" name="website" placeholder="Website URL" onChange={handleChange} />
      <input type="text" name="socialMedia" placeholder="Social Media Links" onChange={handleChange} />
      <input type="number" name="seatingCapacity" placeholder="Seating Capacity" required onChange={handleChange} />
      <input type="text" name="hours" placeholder="Operating Hours" required onChange={handleChange} />
      <select name="deliveryOptions" required onChange={handleChange}>
        <option value="">Delivery Options</option>
        <option value="yes">Available</option>
        <option value="no">Not Available</option>
      </select>
      <select name="takeoutOptions" required onChange={handleChange}>
        <option value="">Takeout Options</option>
        <option value="yes">Available</option>
        <option value="no">Not Available</option>
      </select>
      <input type="text" name="paymentMethods" placeholder="Payment Methods Accepted" required onChange={handleChange} />
      <textarea name="description" placeholder="Description of the Restaurant" rows="3" required onChange={handleChange}></textarea>
      <div className="button-group">
        <button type="submit" className="btn-submit">Submit</button>
        <button type="button" className="btn-cancel" onClick={() => setFormType(null)}>
          Cancel
        </button>
      </div>
      {message && <p className="message">{message}</p>}
    </form>
  );
}
