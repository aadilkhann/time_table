import React from "react";
import "./Periods.css";
import { subject_Mon } from "./data";

// const subject_Mon = [
//   {
//     sub: "Eng",
//     col: false,
//   },
//   {
//     sub: "Mat",
//     col: false,
//   },
//   {
//     sub: "Che",
//     col: false,
//   },
//   {
//     sub: " ",
//     col: false,
//   },
//   {
//     sub: "LAB",
//     col: true,
//   },
//   {
//     sub: "Phy",
//     col: false,
//   },
// ];

function Shedule() {
  return (
    <div className="periods-col">
      {subject_Mon.map((item, key) => (
        // <div key={`${item}`} className="periods-time">
        <div
          key={`${item}`}
          className={item.col ? "periods-time-1" : "periods-time"}
        >
          <p>{item.sub}</p>
        </div>
      ))}

      {/* <div className="periods-time">
        <p>"Eng"</p>
      </div>
      <div className="periods-time">
        <p>"Mat"</p>
      </div>
      <div className="periods-time">
        <p>"Che"</p>
      </div>
      <p></p>
      <div className="periods-time-1">
        <p>"Lab"</p>
      </div>
      <div className="periods-time">
        <p>"Phy"</p>
      </div> */}
    </div>
  );
}

export default Shedule;
