"use client";
import Link from "next/link";
import styles from "./navabar.module.css"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
interface UserData {
    username: string;
    name: string;
    // Add other properties as needed
}
const Navbar = () =>{
    const router = useRouter();
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

    const dashboardRedirect = () =>{
        router.push(`/dashboard/${username}`)
    }
    const adminDashboard = () =>{
        router.push('/admin');
    }
    const reload = () =>{
        router.push("/");
        setTimeout(() => {
            window.location.reload();
        }, 1000);
        
    }

    return (
        <div className={styles.navbarGrandParent}>
            <div className={styles.navbarParent}>
                <Link href="/" style={{ textDecoration: "none" }}>
                    <div className={styles.navLogo}>
                        <div>Rail</div>
                        <p>WAYS</p>
                    </div>
                </Link>

                <div className={styles.menuset} style={{ display: "flex", gap: "1em" }}>
                    {user?.username === "admin" ? (
                        <span style={{ textDecoration: "none", color: "#EC5B24", fontWeight: "600", alignItems: "center" }}>
                            {user && user.username ? (
                                <div onClick={adminDashboard} style={{ cursor: "pointer" }}>Hi! {user.username}</div>
                            ) : (
                                <Link href="/login" style={{ textDecoration: "none", color: "#EC5B24", fontWeight: "600" }}>Login/Signup</Link>
                            )}
                        </span>
                    ) : (
                        <span style={{ textDecoration: "none", color: "#EC5B24", fontWeight: "600", alignItems: "center" }}>
                            {user && user.username ? (
                                <div onClick={dashboardRedirect} style={{ cursor: "pointer" }}>Hi! {user.username}</div>
                            ) : (
                                <Link href="/login" style={{ textDecoration: "none", color: "#EC5B24", fontWeight: "600" }}>Login/Signup</Link>
                            )}
                        </span>
                    )}
                    {user && user.username ? (
                        <span>
                            <div onClick={reload} style={{ textDecoration: "none", color: "#EC5B24", fontWeight: "600", cursor: "pointer" }}>Logout</div>
                        </span>
                    ) : (
                        <span></span>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Navbar;