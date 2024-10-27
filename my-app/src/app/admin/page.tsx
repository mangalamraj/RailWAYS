"use client";
import React, { useEffect, useState } from "react";
import "./admin.css";
import styles from "./admin.module.css";
import Link from "next/link";
import TrainAdminCard from "@/components/trainsAdminCard/TrainAdminCard";
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
const page = () => {
  const [train, setTrain] = useState<TrainData[]>([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(`/api/gettrains`);
        if (!response.ok) {
          console.log("Error fetching user data");
          return;
        }
        const userData = await response.json();
        setTrain(userData);
      } catch (e) {
        console.log("Error while fetching the data", e);
      }
    };
    fetchdata();
  }, []);
  const username = localStorage.getItem("token");
  if (username != "admin") {
    return (
      <div
        style={{
          paddingTop: "10em",
          display: "Flex",
          justifyContent: "center",
          fontSize: "20px",
          color: "red",
        }}
      >
        You are not authorised!
      </div>
    );
  }
  return (
    <div className="ad_main">
      <div className={styles.adminfather}>
        <div className={styles.RunningHead}>Running Trains</div>
        <div className={styles.addTrains}>
          <img src="images/plus2.png" width="15px"></img>
          <div className={styles.add}>
            <Link
              className="main-up"
              href="/addTrains"
              style={{ textDecoration: "none" }}
            >
              Add Trains
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.train_set}>
        {train.map((category, index) => (
          <div className="tc-sub-user" key={index}>
            <TrainAdminCard
              name={category.name}
              trainNo={category.train_no}
              stDest={category.start_destination}
              edDest={category.end_destination}
              stTime={category.start_time}
              edTime={category.end_time}
              s_1a={category.seat_1a}
              s_2a={category.seat_2a}
              s_3a={category.seat_3a}
              s_sl={category.seat_sl}
              ts_1a={category.seat_tatkal_1a}
              ts_2a={category.seat_tatkal_2a}
              ts_3a={category.seat_tatkal_3a}
              ts_sl={category.seat_tatkal_sl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
