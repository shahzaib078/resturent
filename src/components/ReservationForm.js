import React, { useState } from 'react';


const ReservationForm = () => {
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });

  
  const [confirmationMessage, setConfirmationMessage] = useState('');

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form Data:', form);

    
    setConfirmationMessage(`Thank you, ${form.name}! Your reservation for ${form.guests} guests on ${form.date} at ${form.time} has been confirmed.`);
    
    setForm({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: '',
    });
  };

  return (
    <div className="reservation-container">
      
      <form onSubmit={handleSubmit} className="reservation-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={form.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={form.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="date" 
          name="date" 
          value={form.date} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="time" 
          name="time" 
          value={form.time} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="number" 
          name="guests" 
          placeholder="Number of Guests" 
          value={form.guests} 
          onChange={handleChange} 
          min="1" 
          required 
        />
        <button type="submit" className="reserve-button">Reserve Now</button>
      </form>

      {confirmationMessage && (
        <div className="confirmation-message">
          <p>{confirmationMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
