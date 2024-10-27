"use client";
import Link from "next/link";
import styles from "./login.module.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const router = useRouter();
  const HandleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeEmail(e.target.value);
  };

  const HandlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changePassword(e.target.value);
  };

  const onsubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        router.push(`/home/${data.username}`);
        localStorage.setItem("token", data.username);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.signupGrandParent}>
      <div className={styles.signupParent}>
        <div className={styles.signupdiv}>Login</div>
        <div className={styles.subheadsignup}>
          Start Booking Your Destination!
        </div>
        <div>
          <form action="POST" onSubmit={onsubmit}>
            <div>
              <input
                placeholder="Email"
                type="text"
                value={email}
                onChange={HandleEmailChange}
              ></input>
            </div>

            <div>
              <input
                placeholder="Password"
                type="text"
                value={password}
                onChange={HandlePasswordChange}
              ></input>
            </div>

            <button type="submit">Login!</button>

            <div className={styles.loginRedirector}>
              <div>
                Dont have an account?{" "}
                <Link href="/signup" style={{ textDecoration: "none" }}>
                  <p style={{ display: "inline", color: "#EC5B24" }}>Signup</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
