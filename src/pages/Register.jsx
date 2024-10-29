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
              <img src="src\images\Icons\RegisterCustomer.png" alt="Customer" />
              <h4>Customer Registration</h4>
            </div>
            <div 
              className="icon-card" 
              onClick={() => setFormType('restaurant')}
            >
              <img src="src\images\Icons\RegisterRestaurent.png" alt="Restaurant" />
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
  return (
    <form className="registration-form">
     <img src="src\images\Icons\RegisterCustomer.png" alt="Customer" style={{ width: '113px', height: '113px', display: 'block', margin: '0 auto' }}  />
      <h2>Customer Registration</h2>
      <input type="email" placeholder="Username (Email)" required />
      <input type="password" placeholder="Password" required />
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="tel" placeholder="Phone Number" required />
      <input type="date" placeholder="Date of Birth" required />
      <input type="text" placeholder="Street Address" required />
      <input type="text" placeholder="City" required />
      <select required>
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
    </form>
  );
}

function RestaurantRegistrationForm({ setFormType }) {
  return (
    <form className="registration-form">
      <img src="src\images\Icons\RegisterRestaurent.png" alt="Customer" style={{ width: '113px', height: '113px', display: 'block', margin: '0 auto' }}  />
      <h2>Restaurant Registration</h2>
      <input type="email" placeholder="Username (Email)" required />
      <input type="password" placeholder="Password" required />
      <input type="text" placeholder="Restaurant Name" required />
      <input type="text" placeholder="Owner Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="tel" placeholder="Phone Number" required />
      <input type="text" placeholder="Street Address" required />
      <input type="text" placeholder="City" required />
      <input type="text" placeholder="Type of Cuisine" required />
      <input type="text" placeholder="Business Registration Number" required />
      <input type="url" placeholder="Website URL" />
      <input type="text" placeholder="Social Media Links" />
      <input type="number" placeholder="Seating Capacity" required />
      <input type="text" placeholder="Operating Hours" required />
      <select required>
        <option value="">Delivery Options</option>
        <option value="yes">Available</option>
        <option value="no">Not Available</option>
      </select>
      <select required>
        <option value="">Takeout Options</option>
        <option value="yes">Available</option>
        <option value="no">Not Available</option>
      </select>
      <input type="text" placeholder="Payment Methods Accepted" required />
      <textarea placeholder="Description of the Restaurant" rows="3" required></textarea>
      <input type="file" accept="image/*" required />
      <div className="button-group">
        <button type="submit" className="btn-submit">Submit</button>
        <button type="button" className="btn-cancel" onClick={() => setFormType(null)}>
          Cancel
        </button>
      </div>
    </form>
  );
}
