"use client";
import Link from "next/link";
import styles from "./signup.module.css"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () =>{
    const [name,changename] = useState("");
    const [username,changeUsername] = useState("");
    const [mobile,changeMobile] = useState("");
    const [email,changeEmail] = useState("");
    const [password,changePassword] = useState("");
    const [Confirmpassword,changeconfirmpassword] = useState("");
    const router = useRouter();

    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        changename(e.target.value)
    }
    const handleUsernameChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        changeUsername(e.target.value)
    }
    const handleMobileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        changeMobile(e.target.value);
    }
    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        changeEmail(e.target.value);
    }

    const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        changePassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        changeconfirmpassword(e.target.value);
    }

    const onsubmit = async(e:React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            const response = await fetch('/api/user',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name:name,
                    username:username,
                    mobile:mobile,
                    email:email,
                    password:password,
                    Confirmpassword:Confirmpassword
                })
            })
            if(response.ok){
                router.push("/login");
            }else{
                console.log("Registration Failed")
            }
        }catch(e){
            console.log("Error while registration",e)
        }
    }

    return(
        <div className={styles.signupGrandParent}>
            <div className={styles.signupParent}>
                    <div className={styles.signupdiv}>Sign Up!</div>
                    <div className={styles.subheadsignup}>Dont have an account?</div>
                    <div>
                        <form  onSubmit={onsubmit}>

                            <div><input placeholder="Name" value={name} onChange={handleNameChange}></input></div>

                            <div><input placeholder="Username" value={username} onChange={handleUsernameChange}></input></div>
                            
                            <div><input placeholder="Mobile" value={mobile} onChange={handleMobileChange}></input></div>

                            <div><input placeholder="Email" value={email} onChange={handleEmailChange}></input></div>

                            <div><input placeholder="Password" value={password} onChange={handlePasswordChange}></input></div>

                            <div><input placeholder="Confirm Password" value={Confirmpassword} onChange={handleConfirmPasswordChange}></input></div>
                            <button type="submit">SignUP!</button>


                        </form>
                        <div className={styles.loginRedirector}>
                                <div>Already have an account? <Link href="/login" style={{textDecoration:"none"}}><p style={{display:"inline", color:"#EC5B24"}}>Login</p></Link></div>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default Signup;