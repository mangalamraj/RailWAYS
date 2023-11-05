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
    // Add other properties as needed
}
const Dashboard = () =>{
    const pathname = usePathname();
    const username = pathname.split("/").pop();
    const [user,setUser] = useState<UserData | null>(null);
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
                    <BookingCard/>
                </div>
            </div>
        </div>
    )
}
 export default Dashboard;