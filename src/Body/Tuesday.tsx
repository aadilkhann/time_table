import React from "react";
import "./Periods.css";
import { subject_Tue } from "./data";

function Tuesday() {
  return (
    <div>
      <div className="periods-col">
        {subject_Tue.map((item, key) => (
          <div
            key={`${item}`}
            className={item.col ? "periods-time-1" : "periods-time"}
          >
            <p>{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tuesday;
