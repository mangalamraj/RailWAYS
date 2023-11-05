"use client";
import React, { useState } from "react";
import styles from "./changePass.module.css"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const changePass = () =>{
    const [password, setPassword] = useState("");
    const [newPassword, setnewPassword] =  useState("");
    const pathname = usePathname()
    const username = pathname.split("/").pop();
    const router = useRouter();

    const HandlePassword = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value);
    }

    const HandleNewPassword = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setnewPassword(e.target.value);
    }

    const onsubmit = async(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            const response = await fetch(`/api/changepassword/username?username=${username}`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    password:newPassword,
                    
                })

            })
            if(!response.ok){
                console.log("Error changeing password");
                return;
            }
            else{
                router.push(`/home/${username}`)
                alert("Password Changed!")
            }

        }catch(e){
            console.log("Error while changing the password",e);
        }
    }

    return(
        <div className={styles.changePassGrandParent}>
            <div className={styles.changeParent}>
                <div className={styles.changeHead}>Change Password !</div>
                <form action="POST" className={styles.form} onSubmit={onsubmit}>
                    
                    <input placeholder="Password" value={password} onChange={HandlePassword}></input>
                    <input placeholder="New Password" value={newPassword} onChange={HandleNewPassword}></input>
                    <div><button type="submit">Change</button></div> 
                </form>
            </div>
        </div>
    )
}

export default changePass;