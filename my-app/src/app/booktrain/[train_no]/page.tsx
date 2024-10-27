"use client";
import getTData from "@/app/lib/getTdata";
import React, { useState, useEffect } from "react";
import "./bookt.css";

type Train = {
  seat_3a_price: number;
};

type Params = {
  params: {
    train_no: string;
  };
};

type Passenger = {
  passenger_name: string;
  passenger_phon: string;
  passenger_age: number;
  passenger_gender: "male" | "female";
  passenger_berth: "lower" | "upper" | "middle" | "sidelower" | "sideupper";
  passenger_status: string;
  passenger_class: string;
};

const TrainReservationForm = ({ params: { train_no } }: Params) => {
  const [trainData, setTrainData] = useState<Train | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTData(train_no);
        setTrainData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [train_no]);

  const [passengers, setPassengers] = useState<Passenger[]>([
    {
      passenger_name: "",
      passenger_gender: "male",
      passenger_berth: "lower",
      passenger_phon: "",
      passenger_age: 0,
      passenger_status: "scheduled",
      passenger_class: "1A",
    },
  ]);

  const addPassenger = () => {
    setPassengers([
      ...passengers,
      {
        passenger_name: "",
        passenger_gender: "male",
        passenger_berth: "lower",
        passenger_phon: "",
        passenger_age: 0,
        passenger_status: "scheduled",
        passenger_class: "1A",
      },
    ]);
  };

  const removePassenger = (index: number) => {
    const updatedPassengers = [...passengers];
    updatedPassengers.splice(index, 1);
    setPassengers(updatedPassengers);
  };

  const calculateTotalFare = (): number => {
    if (trainData && typeof trainData.seat_3a_price === "number") {
      const baseFare = trainData.seat_3a_price;
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
        let value: number | string = event.target.value;

        // Parse input values as integers (phone number and age)
        if (property === "passenger_phon" || property === "passenger_age") {
          if (value === "") {
            value = 0; // Set to 0 for empty strings
          } else {
            value = parseInt(value, 10);
          }
        }

        return {
          ...passenger,
          [property]: value,
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
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.confirm("Tickets booked successfully");
        history.back();
      } else {
        const errorData = await response.json(); // Parse the error response
        console.error("Booking failed:", errorData);
      }
    } catch (error) {
      // Handle network errors
      console.error("Error while booking:", error);
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
                onChange={(e) =>
                  handlePassengerChange(e, index, "passenger_name")
                }
              />
              <div>
                <label>Gender:</label>
                <input
                  type="radio"
                  name={`gender_${index}`}
                  value="male"
                  checked={passenger.passenger_gender === "male"}
                  onChange={(e) =>
                    handlePassengerChange(e, index, "passenger_gender")
                  }
                />
                <label className="bk_gen">Male</label>
                <input
                  type="radio"
                  name={`gender_${index}`}
                  value="female"
                  checked={passenger.passenger_gender === "female"}
                  onChange={(e) =>
                    handlePassengerChange(e, index, "passenger_gender")
                  }
                />
                <label className="bk_gen">Female</label>
              </div>
              <div>
                <label>Berth:</label>
                <select
                  value={passenger.passenger_berth}
                  onChange={(e) =>
                    handlePassengerChange(e, index, "passenger_berth")
                  }
                >
                  <option value="lower">Lower</option>
                  <option value="upper">Upper</option>
                  <option value="middle">Middle</option>
                  <option value="sidelower">Side Lower</option>
                  <option value="sideupper">Side Upper</option>
                </select>
              </div>
              <input
                type="number"
                placeholder={`Phone Number`}
                value={
                  passenger.passenger_phon === ""
                    ? ""
                    : passenger.passenger_phon
                }
                onChange={(e) =>
                  handlePassengerChange(e, index, "passenger_phon")
                }
              />

              <input
                type="number"
                placeholder={`Age`}
                value={
                  passenger.passenger_age === 0 ? "" : passenger.passenger_age
                }
                onChange={(e) =>
                  handlePassengerChange(e, index, "passenger_age")
                }
              />
              <div>
                <label>Class:</label>
                <select
                  value={passenger.passenger_class}
                  onChange={(e) =>
                    handlePassengerChange(e, index, "passenger_class")
                  }
                >
                  <option value="1A">1A</option>
                  <option value="2A">2A</option>
                  <option value="3A">3A</option>
                  <option value="Sleeper">Sleeper</option>
                  <option value="SecondClass">Second Class</option>
                </select>
              </div>
              <button className="rm_btn" onClick={() => removePassenger(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>

        <button className="ad_btn" onClick={addPassenger}>
          Add Passenger
        </button>
        <hr className="bk_fare_hr" />
        <p className="bk_tfare">Total Fare : ${calculateTotalFare()}</p>
        <hr className="bk_fare_hr2" />
        <button type="submit" className="bk_fbtn">
          Book Ticket{" "}
        </button>
      </form>
    </div>
  );
};

export default TrainReservationForm;
