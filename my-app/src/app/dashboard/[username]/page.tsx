"use client";
import { usePathname } from "next/navigation";
import styles from "./dashboard.module.css"
import { useEffect, useState } from "react";
import BookingCard from "@/components/bookingCard/bookingCard";
interface UserData {
    username: string;
    name: string;
    mobile:string;
    email: string
}



interface PassengerData {
    passengerName :  string,
    passengerPhone : number,
    passengerClass :  string,
    passengerSeat :  '14',
    passengerStatus:string
    id:number
}



const Dashboard = () =>{

    const handleCancelBooking = async (id: number) => {
        try {
          const response = await fetch('/api/bookings', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
          });
    
          if (!response.ok) {
            console.log('Error updating passenger status');
            return;
          }
    
          // Update the local state after a successful update
          setPassenger((prevPassengers) =>
            prevPassengers.map((passenger) =>
              passenger.id === id
                ? { ...passenger, passengerStatus: 'cancelled' }
                : passenger
            )
          );
    
          console.log('Passenger status updated successfully');
        } catch (error) {
          console.error('Error updating passenger status:', error);
        }
      };
    

    const pathname = usePathname();
    const username = pathname.split("/").pop();
    const [user,setUser] = useState<UserData | null>(null);

    const [passenger, setPassenger] = useState<PassengerData[]>([]);
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                const response = await fetch(`/api/getUser/username?username=${username}`)
                if(!response.ok){
                    console.log("Error fetching user data");
                    return;
                }
                const userData = await response.json();
                setUser(userData);
            }catch(e){
                console.log("Error while fetching the data",e);
            }
            
        }
        fetchdata();
    },[username])

    useEffect(() => {
        const fetchPassengerData = async () => {
            try {
              
                if (!user?.mobile) {
                    console.log("User mobile number is missing or invalid");
                    return;
                }
    
                const passengerPhone = parseInt(user?.mobile, 10);

                const response = await fetch(`/api/passbooking/passengerPhone?passengerPhone=${passengerPhone}`);
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
    }, [user?.mobile])



    return(
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
                    <h2 className ={styles.bking_head}>Your Bookings - </h2>

                    {passenger.length > 0 ? (
                        passenger.map((category, index) => (
                            <div className={styles.bk_sub_user} key={index}>
                                  
                                <BookingCard
                                 psgId={category.id}
                                psgStatus={category.passengerStatus}
                                    psgName={category.passengerName}
                                    psgPhone={category.passengerPhone}
                                    psgClass={category.passengerClass}
                                    psgSeat={category.passengerSeat} 
                                                 onCancel={() => handleCancelBooking(category.id)} // Pass the cancellation function


                                    
                                />
                            </div>
                        ))
                    ) : (
                        <p>Loading passenger data...</p>
                    )}


                </div>
            </div>
        </div>
    )
}
 export default Dashboard;