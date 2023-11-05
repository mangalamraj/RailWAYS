"use client"
import TrainCard from '@/components/runningTrains/TrainCard'
import React, { useEffect, useState } from 'react'
import getTrains from '../lib/getTrains';
import './searchtrains.css'

type Trains = {
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

const SearchTrains = () => {
  const [trainData, setTrainData] = useState<Trains[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrains();
      setTrainData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="st_main">
      {trainData.map((category, index) => (
        <div className="tc-sub-user" key={index}>
          <TrainCard
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
  );
}

export default SearchTrains;
