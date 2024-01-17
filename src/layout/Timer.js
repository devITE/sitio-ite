import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="Timer">
      <div>
        <div>
          <p id="day">{days < 10 ? "0" : days}</p>
          <p>Días</p>
        </div>
      </div>
      <div>
        <div>
          <p id="hour">{hours < 10 ? "0" : hours}</p>
          <p>Horas</p>
        </div>
      </div>
      <div>
        <div>
          <p id="minute">{minutes < 10 ? "0" : minutes}</p>
          <p>Minutos</p>
        </div>
      </div>
      <div>
        <div>
          <p id="second">{seconds < 10 ? "0" : seconds}</p>
          <p>Segundos</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
