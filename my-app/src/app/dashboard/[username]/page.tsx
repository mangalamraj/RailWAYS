"use client";
import { usePathname } from "next/navigation";
import styles from "./dashboard.module.css";
import { useEffect, useState } from "react";
import BookingCard from "@/components/bookingCard/bookingCard";
interface UserData {
  username: string;
  name: string;
  mobile: string;
  email: string;
}

interface BookingData {
  id: number;
  trainNo: string;
}

interface TrainData {
  name: string;
  train_no: string;
  start_destination: string;
  end_destination: string;
  start_time: string;
  end_time: string;
  seat_1a: string;
  seat_2a: string;
  seat_3a: string;
  seat_sl: string;
  seat_tatkal_1a: string;
  seat_tatkal_2a: string;
  seat_tatkal_3a: string;
  seat_tatkal_sl: string;
}

interface PassengerData {
  passengerName: string;
  passengerPhone: number;
  passengerClass: string;
  passengerSeat: "14";
  passengerStatus: string;
  trainReservationId: number;
  id: number;
  trainData: TrainData;
}

const Dashboard = () => {
  const handleCancelBooking = async (id: number) => {
    try {
      const response = await fetch("/api/bookings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        console.log("Error updating passenger status");
        return;
      }

      // Update the local state after a successful update
      setPassenger((prevPassengers) =>
        prevPassengers.map((passenger) =>
          passenger.id === id
            ? { ...passenger, passengerStatus: "cancelled" }
            : passenger
        )
      );

      console.log("Passenger status updated successfully");
    } catch (error) {
      console.error("Error updating passenger status:", error);
    }
  };

  const pathname = usePathname();
  const username = pathname.split("/").pop();
  const [user, setUser] = useState<UserData | null>(null);
  const [bkingData, setbkingData] = useState<BookingData | null>(null);
  const [trainData, settrainData] = useState<TrainData | null>(null);

  const [passenger, setPassenger] = useState<PassengerData[]>([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `/api/getUser/username?username=${username}`
        );
        if (!response.ok) {
          console.log("Error fetching user data");
          return;
        }
        const userData = await response.json();
        setUser(userData);
      } catch (e) {
        console.log("Error while fetching the data", e);
      }
    };
    fetchdata();
  }, [username]);

  useEffect(() => {
    const fetchPassengerData = async () => {
      try {
        if (!user?.mobile) {
          console.log("User mobile number is missing or invalid");
          return;
        }

        const passengerPhone = parseInt(user?.mobile, 10);

        const response = await fetch(
          `/api/passbooking/passengerPhone?passengerPhone=${passengerPhone}`
        );
        if (!response.ok) {
          console.log("Error fetching passenger data");
          return;
        }

        const passengerData = await response.json();

        setPassenger(passengerData);
      } catch (e) {
        console.log("Error while fetching passenger data", e);
      }
    };

    fetchPassengerData();
  }, [user?.mobile]);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        if (!passenger[0]?.trainReservationId) {
          console.log("User train reservation id is missing or invalid");
          return;
        }

        const response = await fetch(
          `/api/userbkings/id?id=${passenger[0]?.trainReservationId}`
        );
        if (!response.ok) {
          console.log("Error fetching passenger data");
          return;
        }

        const bookingData = await response.json();

        setbkingData(bookingData);
      } catch (e) {
        console.log("Error while fetching booking data", e);
      }
    };

    fetchBookingData();
  }, [passenger[0]?.trainReservationId]);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        if (!bkingData?.trainNo) {
          console.log("User train number is missing or invalid");
          return;
        }

        const response = await fetch(
          `/api/train/train_no?train_no=${bkingData?.trainNo}`
        );
        if (!response.ok) {
          console.log("Error fetching train data");
          return;
        }

        const trainData = await response.json();

        settrainData(trainData);
      } catch (e) {
        console.log("Error while fetching booking data", e);
      }
    };

    fetchTrainData();
  }, [bkingData?.trainNo]);

  return (
    <div className={styles.dashboardGrandparent}>
      <div className={styles.dashboardParent}>
        <div className={styles.aboutSection}>
          <div className={styles.aboutSectionParent}>
            <div>{user?.name}</div>
            <p>Username : {user?.username}</p>
            <p>Phone: {user?.mobile}</p>
            <p>Email: {user?.email}</p>
            <a href={`/changePassword/${username}`}>Change Password</a>
          </div>
        </div>
        <div>
          <h2 className={styles.bking_head}>Your Bookings - </h2>

          {passenger.length > 0 ? (
            passenger.map((item, index) => (
              <div className={styles.bk_sub_user} key={index}>
                <BookingCard
                  trainName="Sangmitra"
                  trainNumber="11"
                  trainDepartureTime={item.trainData?.start_time}
                  trainArrivalTime={item.trainData?.end_time}
                  trainStartDestination={item.trainData?.start_destination}
                  trainEndDestination={item.trainData?.end_destination}
                  psgId={item.id}
                  psgStatus={item.passengerStatus}
                  psgName={item.passengerName}
                  psgPhone={item.passengerPhone}
                  psgClass={item.passengerClass}
                  psgSeat={item.passengerSeat}
                  onCancel={() => handleCancelBooking(item.id)} // Pass the cancellation function
                />
              </div>
            ))
          ) : (
            <p>Loading passenger data...</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
