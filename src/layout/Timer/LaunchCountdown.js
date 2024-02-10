import React, { useState, useEffect } from "react";
import TimerBox from "./TimerBox";
import "./LaunchCountdown.css";
const LaunchCountdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getRandomDays = () => Math.floor(Math.random() * 31);

  useEffect(() => {
    setDays(getRandomDays());
    setHours(23);
    setMinutes(59);
    setSeconds(59);
  }, []);

  const flip_anime_sec = () => {
    const secFlip = document.getElementById("flip-sheet-sec");
    if (secFlip) {
      secFlip.classList.toggle("flip");
    }
  };

  useEffect(() => {
    const stopTimer = setInterval(() => {
      setSeconds((prevSeconds) => {
        const newValue = prevSeconds - 1;
        if (newValue < 0 && minutes > 0) {
          return 59;
        } else if (newValue < 0 && minutes === 0 && hours > 0) {
          return 59;
        } else if (newValue < 0 && minutes === 0 && hours === 0 && days > 0) {
          return 23;
        } else if (newValue < 0 && minutes === 0 && hours === 0 && days === 0) {
          clearInterval(stopTimer);
          clearInterval(stopAnime);
          return 0;
        } else {
          return newValue;
        }
      });
    }, 1000);

    const stopAnime = setInterval(flip_anime_sec, 1000);

    return () => {
      clearInterval(stopTimer);
      clearInterval(stopAnime);
    };
  }, [days, hours, minutes]);

  return (
    <main className="background">
      <div className="container center">
        <h1 className="heading">WE'RE LAUNCHING SOON</h1>
        <div className="countdown-timer">
          <TimerBox value={days} label="DAYS" />
          <TimerBox value={hours} label="HOURS" />
          <TimerBox value={minutes} label="MINUTES" />
          <TimerBox value={seconds} label="SECONDS" />
        </div>
      </div>
      <div className="container bottom">
        <img
          src="https://www.instagram.com/p/CU3K1ZjH_Qp/"
          alt="Launch Countdown"
        />
      </div>
    </main>
  );
};

export default LaunchCountdown;
