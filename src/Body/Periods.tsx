import React from "react";
import "./Periods.css";

const periods = [
  { period: "I", timing: "9:30-10:20" },
  { period: "II", timing: "10:20-11:10" },
  { period: "III", timing: "11:10-12:00" },
  { period: "lunch", timing: "12:00-12:40" },
  { period: "IV", timing: "12:40-1:30" },
  { period: "V", timing: "1:30-2:20" },
  { period: "VI", timing: "2:20-3:10" },
  { period: "VII", timing: "3:10-4:00" },
];

function Periods() {
  return (
    <div className="periods-col">
      {periods.map((item, key) => (
        <div key={`${item}`} className="periods-time">
          <h3 className="period">{item.period}</h3>
          <h3 className="time">{item.timing}</h3>
        </div>
      ))}
    </div>
  );
}

export default Periods;
