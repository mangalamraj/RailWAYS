"use client";
import getTno from '@/app/lib/getTno';
import React, { useState,useEffect } from 'react';
import './bookt.css';


type Train={
    seat_1a:number
  }




type Params ={
    params:{
     train_no:string,
     seat_1a:number
    }
 }






const TrainReservationForm = ({params:{train_no,seat_1a}}:Params) => {

    const [userData, setUserData] = useState<Train | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTno(train_no);
        setUserData(data);
      } catch (error) {
        // Handle error here
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [train_no]);

  const [passengers, setPassengers] = useState<Passenger[]>([
    { passenger_name: '', passenger_gender: 'male', passenger_berth: 'lower', passenger_phon: 0, passenger_age: 0,passenger_status:'scheduled' },
  ]);

  const addPassenger = () => {
    setPassengers([...passengers, { passenger_name: '', passenger_gender: 'male', passenger_berth: 'lower', passenger_phon: 0, passenger_age: 0,passenger_status:'scheduled' }]);
  };

  const removePassenger = (index: number) => {
    const updatedPassengers = [...passengers];
    updatedPassengers.splice(index, 1);
    setPassengers(updatedPassengers);
  };

  const calculateTotalFare = (): number => {
    if (userData && typeof userData.seat_1a === 'number') {
        const baseFare = userData.seat_1a;
        return baseFare * passengers.length;
      }
      // Handle the case where seat_1a is not available or not a number
      return 0; 
  };

  const handlePassengerChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number,
    property: keyof Passenger
  ) => {
    const updatedPassengers = passengers.map((passenger, passengerIndex) => {
      if (passengerIndex === index) {
        return {
          ...passenger,
          [property]: event.target.value,
        };
      }
      return passenger;
    });
    setPassengers(updatedPassengers);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Prepare data to send in the POST request
    const formData = {
      train_no,
      passengers,
      passenger_fare: calculateTotalFare(),
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful response (e.g., show a success message)
        console.log('Booking successful!');
      } else {
        const errorData = await response.json(); // Parse the error response
        console.error('Booking failed:', errorData);
      }
    } catch (error) {
      // Handle network errors
      console.error('Error while booking:', error);
    }
  };





  return (
    <div className="bk_main">

<form onSubmit={handleFormSubmit}>

      <div id="passengerDetails">
        <h2>Passenger Details:</h2>
        {passengers.map((passenger, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Passenger ${index + 1} Name`}
              value={passenger.passenger_name}
              onChange={(e) => handlePassengerChange(e, index, 'passenger_name')}
            />
            <div>
              <label>Gender:</label>
              <input
                type="radio"
                name={`gender_${index}`}
                value="male"
                checked={passenger.passenger_gender === 'male'}
                onChange={(e) => handlePassengerChange(e, index, 'passenger_gender')}
              />
              <label className="bk_gen">Male</label>
              <input
                type="radio"
                name={`gender_${index}`}
                value="female"
                checked={passenger.passenger_gender === 'female'}
                onChange={(e) => handlePassengerChange(e, index, 'passenger_gender')}
              />
              <label  className="bk_gen">Female</label>
            </div>
            <div>
              <label>Berth:</label>
              <select
                value={passenger.passenger_berth}
                onChange={(e) => handlePassengerChange(e, index, 'passenger_berth')}
              >
                <option value="lower">Lower</option>
                <option value="upper">Upper</option>
                <option value="middle">Middle</option>
                <option value="sidelower">Side Lower</option>
                <option value="sideupper">Side Upper</option>
              </select>
            </div>
            <input
              type="text"
              placeholder={`Phone Number`}
              value={passenger.passenger_phon}
              onChange={(e) => handlePassengerChange(e, index, 'passenger_phon')}
            />

            <input
              type="number"
              placeholder={`Age`}
              value={passenger.passenger_age}
              onChange={(e) => handlePassengerChange(e, index, 'passenger_age')}
            />
            <button className="rm_btn" onClick={() => removePassenger(index)}>Remove</button>
          </div>
        ))}
      </div>

      <button className="ad_btn" onClick={addPassenger}>Add Passenger</button>
      <hr className="bk_fare_hr" />
      <p className="bk_tfare">Total Fare : ${calculateTotalFare()}</p>
      <hr className="bk_fare_hr2" />
      <button  type="submit" className="bk_fbtn">Book Ticket </button>
      </form>
    </div>
  );
};

interface Passenger {
  passenger_name: string;
  passenger_phon: number,
  passenger_age:number,

  passenger_gender: 'male' | 'female';
  passenger_berth: 'lower' | 'upper' | 'middle' | 'sidelower' | 'sideupper';
  passenger_status: string;
}

export default TrainReservationForm;

