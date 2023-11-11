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
    passengerClass :  string
    passengerSeat :  '14'
}



const Dashboard = () =>{
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
                console.log(passengerData);
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
                    <h2>Your Bookings</h2>

                    {passenger.length > 0 ? (
                        passenger.map((category, index) => (
                            <div className="tc-sub-user" key={index}>
                                <BookingCard
                                    psgName={category.passengerName}
                                    psgPhone={category.passengerPhone}
                                    psgClass={category.passengerClass}
                                    psgSeat={category.passengerSeat} 
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