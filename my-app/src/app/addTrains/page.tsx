"use client";
import './addtrains.css'

import React, { useState } from 'react';

const AddTrains = () => {
  const [formData, setFormData] = useState({
    train_no: '',
    name: '',
    start_destination: '',
    end_destination: '',
    departure_date: '',
    start_time: '',
    end_time: '',
    quota:'normal',
    seat_1a: '',
    seat_2a: '',
    seat_3a: '',
    seat_sl: '',
    seat_tatkal_1a: '',
    seat_tatkal_2a: '',
    seat_tatkal_3a: '',
    seat_tatkal_sl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let updatedValue: string | number | Date;
  
 
     if (name === 'train_no'||name=== 'seat_1a'||name=== 'seat_2a'||name=== 'seat_3a'||name=== 'seat_sl'||name=== 'seat_tatkal_1a'||name=== 'seat_tatkal_2a'||name=== 'seat_tatkal_3a'||name=== 'seat_tatkal_sl') {
      updatedValue = parseInt(value, 10);
    } else {
      updatedValue = value;
    }
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };
  
  
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dateOfUploading = new Date(formData.departure_date).toISOString();
      const response = await fetch('api/getAlltrains', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          departure_date: dateOfUploading,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error occurred while registering:', error);
    }
  };

  return (
    <div className="container">
      <h1>Train Details</h1>
      <hr className="ad-hr" />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="train_no">Train Number:</label>
          <input
            type="text"
            id="train_no"
            name="train_no"
            value={formData.train_no}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Train Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="start_destination">From :</label>
          <input
            type="text"
            id="start_destination"
            name="start_destination"
            value={formData.start_destination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="end_destination">To:</label>
          <input
            type="text"
            id="end_destination"
            name="end_destination"
            value={formData.end_destination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departure_date">Departure Date:</label>
          <input
            type="date"
            id="departure_date"
            name="departure_date"
            value={formData.departure_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
  <label htmlFor="start_time">Start Time (HH:mm):</label>
  <input
    type="text"
    id="start_time"
    name="start_time"
    value={formData.start_time}
    onChange={handleChange}
   
    required
  />
</div>

<div className="form-group">
  <label htmlFor="end_time">End Time (HH:mm):</label>
  <input
    type="text"
    id="end_time"
    name="end_time"
    value={formData.end_time}
    onChange={handleChange}
 
    required
  />
</div>
        <div className="form-group">
          <label htmlFor="seat_1a"> Seat 1A : </label>
          <input
            type="text"
            id="seat_1a"
            name="seat_1a"
            value={formData.seat_1a}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seat_2a"> Seat 2A : </label>
          <input
            type="text"
            id="seat_2a"
            name="seat_2a"
            value={formData.seat_2a}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seat_3a"> Seat 3A : </label>
          <input
            type="text"
            id="seat_3a"
            name="seat_3a"
            value={formData.seat_3a}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seat_sl">Sleeper : </label>
          <input
            type="text"
            id="seat_sl"
            name="seat_sl"
            value={formData.seat_sl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seat_tatkal_1a">Tatkal 1A:</label>
          <input
            type="text"
            id="seat_tatkal_1a"
            name="seat_tatkal_1a"
            value={formData.seat_tatkal_1a}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seat_tatkal_2a">Tatkal 2A:</label>
          <input
            type="text"
            id="seat_tatkal_2a"
            name="seat_tatkal_2a"
            value={formData.seat_tatkal_2a}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seat_tatkal_3a">Tatkal 3A:</label>
          <input
            type="text"
            id="seat_tatkal_3a"
            name="seat_tatkal_3a"
            value={formData.seat_tatkal_3a}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seat_tatkal_sl">Tatkal Sleeper:</label>
          <input
            type="text"
            id="seat_tatkal_sl"
            name="seat_tatkal_sl"
            value={formData.seat_tatkal_sl}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTrains;
