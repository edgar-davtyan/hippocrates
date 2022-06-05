import { useState, useEffect } from "react";

import "./styles.scss";

const DateTime = () => {
  const date = new Date();

  const [dateTimer, setDateTimer] = useState(date);

  const getDate = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[date.getMonth()];
  };

  const formatAMPM = (dateTimer) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDateTimer(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <div className="date_box">
      <h2>{getDate()}</h2>
      <p>Today At {formatAMPM(dateTimer)}</p>
    </div>
  );
};

export default DateTime;
